import Vue from 'vue'
import router from './router'
import App from './App.vue'

new Vue({
  el: '#app',
  router,
  components: { App }, //ロートコンポーネントの使用宣言
  template: '<App />' //ルートコンポーネント描画

})
