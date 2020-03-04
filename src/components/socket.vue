<template>
  <div>
    <ul class="list" id="items" ref="list">
      <li
        v-for="(item,index) in items"
        :name="item.Sort"
        :key="index"
        style="border:1px solid #ccc;padding:10px"
      >
        <h3>{{item.nm}}</h3>
        <div style="padding-left:20px" class="ccc">
          <p v-for="v in item.lists" :key="v">列表{{v}}</p>
        </div>
      </li>
    </ul>
    <p>拖拽前: {{ oldList }}</p>
    <p>拖拽后 :{{ newList }}</p>

    <div style="padding-left:30px">
      <p>拖拽前: {{ coldList }}</p>
      <p>拖拽后 :{{ cnewList }}</p>
    </div>
  </div>
</template>
<script>
import Sortable from "sortablejs";
export default {
  data() {
    return {
      uwasc: true,
      idx: "1",
      items: [
        {
          id: 1,
          nm: "澳元日元1",
          enm: "AUDJPY(2.6)",
          price: 20.545,
          up: "-255%",
          sel: false,
          Sort: 1,
          lists: [1, 2, 3, 4]
        },
        {
          id: 2,
          nm: "澳元日元2",
          enm: "AUDJPY(2.6)",
          price: 20.545,
          up: "+255%",
          sel: true,
          Sort: 2,
          lists: [1, 2, 3, 4]
        },
        {
          id: 3,
          nm: "澳元日元3",
          enm: "AUDJPY(2.6)",
          price: 20.545,
          up: "+255%",
          sel: true,
          Sort: 3,
          lists: [1, 2, 3, 4]
        },
        {
          id: 4,
          nm: "澳元日元4",
          enm: "AUDJPY(2.6)",
          price: 20.545,
          up: "+255%",
          sel: true,
          Sort: 4,
          lists: [1, 2, 3, 4]
        },
        {
          id: 5,
          nm: "澳元日元5",
          enm: "AUDJPY(2.6)",
          price: 20.545,
          up: "+255%",
          sel: true,
          Sort: 5,
          lists: [1, 2, 3, 4]
        }
      ],
      templist: [],
      cindex: 0,
      oldList: [],
      newList: [],
      coldList: [],
      cnewList: []
    };
  },
  mounted() {
    this.templist = JSON.parse(JSON.stringify(this.items));
    console.log("gfdgfd", this.templist);
    this.oldList = this.templist.map(v => v.id);
    this.newList = this.oldList.slice();
    this.$nextTick(() => {
      this.setSort();
    });
  },
  methods: {
    setSort() {
      let el = document.getElementById("items");
      let sortable = Sortable.create(el, {
        group:{
pull:true,
put:true,
        },
        ghostClass: "sortable-ghost",
        onEnd: evt => {
          console.log("vvvv", evt);
          const targetRow = this.templist.splice(evt.oldIndex, 1)[0];
          this.templist.splice(evt.newIndex, 0, targetRow);
          // console.log("targetRowtargetRow", targetRow);
          console.log("templisttemplist", this.templist);

          const tempIndex = this.newList.splice(evt.oldIndex, 1)[0];
          this.newList.splice(evt.newIndex, 0, tempIndex);
        }
      });
      for (let i = 0; i < this.items.length; i++) {
        let el = document.querySelectorAll(".ccc")[i];
        // console.log("ggg", el);
        let sortable = Sortable.create(el, {
            group:{
          pull:true,
put:true,
        },
          ghostClass: "sortable-ghost",
          onEnd: evt => {
            console.log("bbbbbbbb", evt);
            const targetRow = this.templist[i].lists.splice(evt.oldIndex, 1)[0];
            this.templist[i].lists.splice(evt.newIndex, 0, targetRow);
            console.log("targetRowtargetRow", this.templist);
            // var aa=this.templist[i].lists;
            // console.log("templisttemplist", aa.push(77));
            //  console.log("templisttemplist", aa);

            // const tempIndex = this.cnewList.splice(evt.oldIndex, 1)[0];
            // this.cnewList.splice(evt.newIndex, 0, tempIndex);
          }
        });
      }

      // let sortable = new Sortable(el, {})
    }
  }
};
</script>
<style>
.sortable-ghost {
  opacity: 0.3;
  color: #fff !important;
  background: #42b983 !important;
}
</style>