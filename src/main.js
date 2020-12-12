import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//please import these bootstrap files to your style
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


import JadwalDokter from './components/JadwalDokter.vue'
import RekamMedis from './components/RekamMedis.vue'
// import LoginApp from './components/login.vue'
import DaftarPasien from './components/DaftarPasien.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faPencilAlt, faCheckSquare, faUserMd, faStethoscope, faWheelchair, faChartPie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
 
library.add(faUserSecret, faPencilAlt, faCheckSquare, faUserMd, faStethoscope, faWheelchair, faChartPie);

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    // {path: '/', component: LoginApp},
    {path: '/main', component: null},
    {path: '/daftarPasien', component: DaftarPasien},
    {path: '/jadwalDokter', component: JadwalDokter},
    {path: '/rekamMedis', component: RekamMedis},
]
})

new Vue({
  router,
  store: store,
  render: h => h(App),
}).$mount('#app')
