<template>
  <div id="app">
    <div v-if="!isLogin" class="login_false">
      <login-app></login-app>
    </div>
    
    <div v-if="isLogin"  class="login_true">
      <side-bar class="sidebar"></side-bar>
      <router-view></router-view>
      <search-bar class="searchbar"></search-bar>
    </div>
    <!-- <button @click.prevent="test">Test</button> -->
  </div>
</template>

<script>
import LoginApp from './components/login.vue'
import SideBar from './components/sidebar.vue'
import routes from './utils/routerConfig.js'
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'App',
  data() {
    return {
      routes
    }
  },

  async beforeCreate() {
    //desperate check for localstorage
    if(localStorage.patientData) {
      const data = (localStorage.patientData)
      // console.log('data empty')
      // console.log(JSON.parse(data))
      await this.$store.dispatch('fetchPatientList', JSON.parse(data))
    }
    else {
      await this.$store.dispatch('fetchPatientList', null)
      await this.$store.dispatch('getPatientData')
    }
    if(JSON.parse(localStorage.isLogin)) {
      this.$store.dispatch("loginStaff")
    }
  
  },
  created() {
  },
  components: {
    LoginApp,
    SideBar,
    SearchBar
  },
  watch: {
    PatientList: function() {
      console.log('changed')
      localStorage.setItem('patientData', JSON.stringify(this.PatientList))
    },
    isLogin: function() {
      localStorage.setItem('isLogin', JSON.stringify(this.isLogin))
    }
  },
  computed: {
    currentStaff() {
      return this.$store.state.currentStaff
    },
    PatientList() {
      // console.log(this.$store.getters.patientListget)
      return this.$store.state.PatientList
    },
    isLogin() {
      return this.$store.state.isLogin
    },
    currentPage() {
      return this.$store.state.currentPage
    },
    currentPatientData() {
      return this.$store.state.currentPatient
    }
  },
  methods: {
    test() {
      console.log(this.$store.getters.patientListget)
      // console.log(this.PatientList)
      // this.$store.dispatch('newPage', 'jadwalDokter')
      this.$store.dispatch('getPatientData')
      // console.log(this.currentPatientData.ImmunisasiList)
    }
  }
}
</script>

<style>
* {
    font-family: 'Lato', sans-serif;
}
.login_true {
  background-color: rgba(246,248,251,1);
}
.login_true {
  display: grid;
  grid-template-columns: 256px 1fr;
  grid-template-rows: 88px 1fr;
  height: 100vh;
  width: 100vw;
}
.sidebar {
  grid-row: 1/3;
  grid-column: 1/2;
}
.content-container {
  grid-row: 2/3;
  grid-column: 2/3;
  overflow: scroll;
}
.searchbar {
  grid-row: 1/2;
  grid-column: 2/3;
  margin-bottom: 0;
}
.table-header {
  font-size: 14px;
}
</style>
