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
    let p1=new Promise((resolve,reject)=>{
     this.func1(resolve)
    })
    let p2=new Promise((resolve,reject)=>{
      this.func2(resolve)
    })
    let p3=new Promise((resolve,reject)=>{
      this.func3(resolve)
    })
    Promise.all([p1,p2,p3]).then(res=>{
      console.log(6)
    })
    
  },
  methods: {
    resolve (b) {
      return [].push(...b)
    },
    func1(resolve){
      setTimeout(() => {
        resolve(console.log(1))
      }, 100);
    },
    func2(resolve){
      setTimeout(() => {
        resolve(console.log(2))
      }, 1000);
    },
    func3(resolve){
      setTimeout(() => {
        resolve(console.log(3))
      }, 300);
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
