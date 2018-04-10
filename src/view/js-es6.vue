<template>
  <div id="app">
    <p>arr1数组{{arr1}}</p>
    <p>b数组{{b}}</p>
    <span>b数组最大值{{Math.min(...arr1)}}</span>
    <p>a数组新加b数组{{resolve(b)}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  },
  data: () => ({
    show: false,
    b: [4, 5, 6],
    arr1: [1, 2, 3]
  }),
  created () {
    console.log()
  },
  methods: {
    resolve (b) {
      return [].push(...b)
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
