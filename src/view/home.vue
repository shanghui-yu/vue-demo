import TextArea from '@/components/ContentEdit/TextArea';
<template>
  <div class="waaper">
    <ul class="manu">
      <li>
        <router-link :to="{ name: 'tabPage'}">1.tab-page[页面tab切换子页面]</router-link>
      <li>
        <router-link :to="{ name: 'Bss', params: { source: 'bbs' }}">2.页面地址参数获取</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Solt'}">3.slot</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Resolve'}">4.Resolve</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'JsEs6'}">5.es6语法</router-link>
      </li>
      <li id="PAGE_AD_57364854" class="bbs-ad" v-show="AD"></li>
      <li>
        <router-link :to="{ name: 'Axios'}">6.axios请求axios接口请求</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'ScrollLeft'}">7.ScrollLeft左右滚动</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Decorate'}">8.修饰符</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Vuexs'}">9.vuex</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Registered'}">10.测试接口注册registered</router-link>
      </li>
       <li>
        <router-link :to="{ name: 'Md5'}">Md5</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      AD:false,
      msg: 'Welcome to Your Vue.js App',
      info: {
        thread: {
          message: ''
        }
      }
    }
  },
  created () {
    setTimeout(() => {
      this.AD=true
      window._THAM.init()
      // let adScript = document.createElement('script')
      // adScript.src='https://s.kcimg.cn/public/m_adm.0.1.1.min.js'
      // document.body.appendChild(adScript)
    }, 500);
  },
  methods: {
    torouter () {
      this.$router.push('/Bss/home')
    }
  }
}
</script>

<style scoped>
  a {
    color: #42b983;
    text-decoration: none;
  }

  .manu li {
    text-align: left;
    padding: 10px;
    position: relative;
  }

  .manu li:after {
    content: '';
    left: 10px;
    bottom: 0;
    right: 10px;
    border-bottom: 1px solid #e4e5e6;
    transform-origin: 0 100%;
    transform: scaley(0.5);
    position: absolute;
    height: 1px;
  }
</style>
