import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'

// 设置项目中所有拥有size属性的组件默认尺寸为'small'，弹框的初始z-index为 3000
Vue.use(Element,{ size: 'small', zIndex: 3000 });

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
