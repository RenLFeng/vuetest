<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld /> -->
     <!-- <Socket /> -->
      <qrcode />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Socket from './components/socket.vue'
import qrcode from './components/qrcode'
export default {
  name: 'app',
  components: {
    HelloWorld,
    Socket,
    qrcode
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
