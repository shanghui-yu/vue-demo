<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
/* Reset */
html, body, h1, h2, h3, h4, h5, p, figure, figcaption, ul, ol, li,dl,dt,dd,form{margin:0;padding:0; font-size: 16px; font-weight: 400;-webkit-text-size-adjust: none;}
body,select,textarea,input{ font:16px/1.5 "Microsoft YaHei",Arial; }
ol, ul{list-style: none}
var, em, i{ font-style:normal;}
a img{ border:0 none;}
a:link,a:visited{text-decoration: none;color:none;}
img{ vertical-align: middle;}
input:focus::-webkit-input-placeholder { color: rgba(255,255,255,0); }
input::-webkit-input-placeholder { color: #999; }
input:focus:-ms-input-placeholder { color: rgba(255,255,255,0); }
input:-ms-input-placeholder { color: #999; }
input[type="search"],input[type="text"],input[type="tel"],input[type="number"],input[type="date"],button,select,textarea,input[type="submit"]{-webkit-appearance: none;-webkit-border-image: none; border-image: none; -webkit-border-radius: 0; border-radius: 0; border:0 none; outline: none; box-sizing:border-box;}
input::-webkit-search-decoration,input::-webkit-search-cancel-button {display: none;}
table { border-collapse:collapse; border-spacing:0; } 
th,td { padding: 0;font-weight: 400 }
.clearfix:after {content:"."; display: block; visibility: hidden; clear: both; height:0; font-size:0}
body{
  -webkit-tap-highlight-color: rgba(255,255,255,0);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
