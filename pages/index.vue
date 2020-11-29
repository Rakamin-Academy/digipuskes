<template>
  <div class="container">
    <div>
      <!-- <Logo />
      <h1 class="title">
        digipuskes
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div> -->
      <!-- <rekam-medis></rekam-medis> -->
      <!-- <jadwal-dokter></jadwal-dokter> -->
    </div>
  </div>
</template>

<script>
import RekamMedis from '../components/RekamMedis'
import JadwalDokter from '../components/JadwalDokter'
export default {
  components: {
    RekamMedis,
    JadwalDokter
  }
}
</script>

<style>

</style>
