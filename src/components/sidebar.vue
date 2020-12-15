<template>
  <div class="sidebar_container">
      <div class="sidebar-component" @click="changePage(pages.dashboard)">
          <!-- icon -->
          <font-awesome-icon :icon="['fas', 'chart-pie']" class="icon"></font-awesome-icon>
          <router-link class="sidebars" to='/main'><h5>Dashboard</h5></router-link>
        
      </div>
      <div class="sidebar-component" @click="changePage(pages.pendaftaran)">
          <!-- icon -->
          <font-awesome-icon :icon="['fas', 'stethoscope']" class="icon"></font-awesome-icon>
          <router-link class="sidebars" to='/daftarPasien'><h5>Pendaftaran </h5></router-link>
          
      </div>
      <div class="sidebar-component" @click="changePage(pages.jadwalDokter)">
          <!-- icon -->
          <font-awesome-icon :icon="['fas', 'user-md']" class="icon"></font-awesome-icon>
          <router-link class="sidebars" to='/jadwalDokter'><h5>Jadwal Dokter</h5></router-link>
          
      </div>
      <div class="sidebar-component" @click="changePage(pages.rekamMedis)">
          <!-- icon -->
          <font-awesome-icon :icon="['fas', 'wheelchair']" class="icon"></font-awesome-icon>
          <router-link class="sidebars" to='/rekamMedis'><h5>Rekan Medis Pasien</h5></router-link>

      </div>
      <div class="sidebar-component patient-name" v-if="currentPatient" @click="changePage(pages.rekamMedis)">
          <!-- icon -->
          <h5 class="sidebars">{{currentPatient.name}}</h5>
      </div>
  </div>
</template>

<script>
import routes from '../utils/routerConfig.js'
export default {
    data() {
        return {
            pages: routes
        }
    },
    methods: {
        changePage(goTo) {
            //cari di store
            console.log(goTo)
            this.$store.dispatch('newPage', goTo)
            // console.log(routes)
        }
    },
    computed: {
        currentPatient() {
            return this.$store.state.currentPatient
        }
    }
}
</script>

<style scoped>
a, h5 {
    text-decoration: none;
    color:  #2f80ed;
    font-size: 15px;
}
.sidebar_container {
    width: 200px;
    height: 100vh;
    box-shadow: 4px 0px 16px rgba(16, 30, 115, 0.08);
    padding-top: 30px;
}
.sidebar-component {
    cursor: pointer;
    margin-bottom: 32px;
    text-align: left;
    margin-left: 24px;
    display: flex;
    flex-direction: row;
    /* margin-top: ; */
}
.patient-name {
    margin-left: 48px;
}
h5 {
    margin: 0;
    
}
.icon {
    margin-right: 14px;
}
</style>