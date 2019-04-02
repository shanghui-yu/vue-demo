<template>
  <div>
    <h1>左右滚动加载</h1>
    <div class="wraper">
      <ul @touchstart.prevent="touchStart" 
        @touchend.prevent="touchEnd" 
        @touchmove.prevent="touchMove" 
        :style="`transform:translate(${x}px,0px) translateZ(0px)`" 
        ref="ul">
        <li v-for="item in numbs" :key="item.id">{{item}}</li>
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
      starty:0,
      endX:0,
      scrollX:0,
      dir:'',
      offsetWidth:'',
      beginStatus:false
    }
  },
  components: {
  },
  created () {
  },
  mounted() {
  },
  methods: {
    /**
     * @Author: yushanghui
     * @description: 记录开始点击的位置 
     * @param {type} 
     * @Date: 2019-03-27 17:02:06
     */
    touchStart(e){
      this.startX = e.targetTouches[0].pageX
      this.starty = e.targetTouches[0].pageY
      // this.offsetWidth= this.$refs.ul
      console.log(this.startX,this.starty,'start');
      this.beginStatus = true
    },
     touchMove(e){
      let touch = e.targetTouches[0];
      let distanceX = touch.pageX-this.startX;
      let distanceY = touch.pageY-this.starty;
      this.x=distanceX+this.scrollX
      if (Math.abs(distanceX)>Math.abs(distanceY) && distanceX>0) {
        this.x=distanceX+this.scrollX
      } else if(Math.abs(distanceX)>Math.abs(distanceY) && distanceX<0){
        this.x=distanceX+this.scrollX
      } else if(Math.abs(distanceX)<Math.abs(distanceY) && distanceY<0){
          console.log('往上滑动');
      } else if(Math.abs(distanceX)<Math.abs(distanceY) && distanceY>0){
          console.log('往下滑动');
      } else{
          console.log('点击未滑动');
      }
      let ul = this.$refs.ul
      console.log(ul.getBoundingClientRect().right, window.innerWidth + 100,'end');
    },
    touchEnd(e){
      let ul = this.$refs.ul
      if (ul.getBoundingClientRect().right<window.innerWidth-100) {
        // this.x = this.offsetWidth
      }
       this.scrollX =this.x
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
