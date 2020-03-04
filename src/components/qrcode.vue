<template>
    <div id="qrCode">
      <div id='code'></div>
      <h1>toCanvas</h1>
      <canvas id="canvas"></canvas>
      <h1>toDataURL</h1>
       <canvas id="canvas2"></canvas>
       <h1>toString</h1>
        <canvas id="canvas3"></canvas>
    </div>
</template>
<style></style>
<script>
  import QRCode from 'qrcode'
    export default{
        data(){
            return {
              msg: 'hello vue',
              codes:''

            }
        },

      components: {
        QRCode: QRCode
      },

      methods: {
        useqrcode(){
// {
// 	version: Number,  //QR版本，如果没指定，会自动计算出一个
// 	errorCorrectionLevel: String, //纠错级别， low, medium, quartile, high 或 L, M, Q, H
// 	maskPattern: Number, //
// 	toSJISFunc: Function, //转换汉字的辅助函数
// 	margin: Number, // default: 4
// 	scale: Number, //比例，默认4
// 	width: Number, // 输出图像的特定宽度，优先于scale，如果太小，放不下图片，这个值会被忽略
// 	color: {
// 		dark: String, //default: #000000ff
// 		light: String, //default: #ffffff
// 	}
// }




          var canvas = document.getElementById('canvas');
            var canvas2 = document.getElementById('canvas2')
              var canvas3 = document.getElementById('canvas3')

          QRCode.toCanvas(canvas, 'http://www.baidu.com',{
              color: {
		// dark: '#f00', 
		// light: '#ff0', 
	}
          }, function (error,success) { //，如果没有指定canvas标签，会自动返回一个， 在回调中指定插入位置即可
            if (error) console.error(error)
            console.log('QRCode success! canvas',success);
          })
          QRCode.toDataURL(canvas2, '123456', function (error,url) { //如果提供了canvasElement，则在此绘制二维码
            if (error) console.error(error)
            console.log('QRCode success canvas2!',url);
          })

          QRCode.toString(canvas3, 'abcdefg', function (error,str) {
            if (error) console.error(error)
            console.log('QRCode success! canvas3');
          })
        }
      },

      mounted(){
            this.useqrcode();
      }
    }
</script>

