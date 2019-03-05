<template>
  <div>
    <h1>左右滚动加载</h1>
    <div class="wraper">
      <ul @touchstart="touchStart" @touchend="touchEnd" @touchmove="isScroll" :style="`transform:translate(${x}px,0px) translateZ(0px)`" ref="ul">
        <li v-for="item in numbs">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '',
      numbs:[1,2,3,4,5],
      intersectionObserver:null,
      loading:false,
      x:0,
      startX:0,
      endX:0,
      scrollX:0
    }
  },
  components: {
  },
  created () {
  },
  mounted() {
  },
  methods: {
    isScroll(e){
      var touch = e.targetTouches[0];
      this.x=touch.pageX-this.startX+this.scrollX
       console.log(this.x);
      // let target=e.target
      // if (target.scrollLeft<20 &&this.loading) {
      //   this.loading = false
      //   let arr = [-8,-7,-6,-5,-2]
      //   this.numbs=[...arr,...this.numbs]
      //   // target.scrollLeft = 810
      //   this.x=810
      //   console.log(target.scrollLeft)
      // }
    },
    touchStart(e){
      this.scrollX = this.scrollX+this.x
      var touch = e.targetTouches[0];
      this.startX = touch.pageX
      console.log(touch.pageX,'start');
    },
    touchEnd(e){
      var touch = e.targetTouches[0];
      // this.x=this.endX-this.startX
      console.log(this.x-this.scrollX,'end');
    }
  }
}
</script>

<style scoped>
  .wraper{
    padding: 0 15px;
    overflow: hidden;
  }
  ul{
    white-space: nowrap;
    float: left;
    transition-property: transform;
    transition-duration: 0ms;
    transform-origin: 0 0 0;
    -webkit-transition-property: transform;
    -webkit-transition-duration: 0ms;
    -webkit-transform-origin: 0 0 0
  }
  li{
    width: 150px;
    height: 150px;
    margin:0 15px 0 0;
    background: #666;
    display: inline-block;
  }
  .red{
    background: red;
  }
</style>
