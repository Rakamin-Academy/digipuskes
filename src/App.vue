<template>
  <div id="app">
    <div v-if="!isLogin" class="login_false">
      <login-app></login-app>
    </div>
    
    <div v-if="isLogin"  class="login_true">
      <rekam-medis v-if="currentPage=='rekamMedis'"></rekam-medis>
      <jadwal-dokter v-if="currentPage=='jadwalDokter'"></jadwal-dokter>
      <daftar-pasien v-if="currentPage=='daftarPasien'"></daftar-pasien>
      <button @click="test">Test</button>
    </div>
    
  </div>
</template>

<script>
import JadwalDokter from './components/JadwalDokter.vue'
import RekamMedis from './components/RekamMedis.vue'
import LoginApp from './components/login.vue'
import DaftarPasien from './components/DaftarPasien.vue'

export default {
  name: 'App',
  async beforeCreate() {
    await this.$store.dispatch('fetchPatientList')
    await this.$store.dispatch('getPatientData')
    //buat percobaan
    
  },
  created() {
  },
   mounted() {
    
  },
  components: {
    JadwalDokter,
    RekamMedis,
    LoginApp,
    DaftarPasien
  },
  computed: {
    currentStaff() {
      return this.$store.state.currentStaff
    },
    PatientList() {
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
      console.log(this.currentStaff)
      console.log(this.PatientList)
      // this.$store.dispatch('newPage', 'jadwalDokter')
      this.$store.dispatch('getPatientData')
      console.log(this.currentPatientData.ImmunisasiList)
    }
  }
}
</script>

<style>
</style>
