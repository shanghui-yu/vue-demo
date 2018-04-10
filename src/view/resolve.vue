<template>
  <div id="app">
    <button @click="resolve">加载</button>
    <hello v-if="show"></hello>
    <loading-comp v-else></loading-comp>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    Hello: (resolve) => {
      require(['../components/resolve-components/Hello.vue'], resolve)
    },
    LoadingComp: (resolve) => {
      require(['../components/resolve-components/loading.vue'], resolve)
    },
    ErrorComp: (resolve) => {
      require(['../components/resolve-components/error.vue'], resolve)
    }
  },
  data: () => ({
    show: false
  }),
  methods: {
    resolve () {
      console.log(1)
      this.show = !this.show
    }
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
