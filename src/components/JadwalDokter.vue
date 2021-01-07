<template>
  <div class="main-container">
        <h1 class="header">Jadwal Petugas Medis</h1>
        <div class="table-outer-container">
            <h3 class="table-title">Petugas Medis Bertugas</h3>
        <div class="table-container">
            <div class="table-header-container">
                <h4 class="table-header col1">Nama</h4>
                <h4 class="table-header col2">Keterangan</h4>
                <h4 class="table-header col3">Jadwal Praktik</h4>
                <h4 class="table-header col4">Waktu</h4>
            </div>
            <ul class="content-list">
                <li v-for="dokter in dokterList" :key="dokter.id" class="content-item">
                    <p class="list-item nama col1">{{dokter.nama}}</p>
                    <p class="list-item spesialisasi col2">{{dokter.spesialisasi}}</p>
                    <p class="list-item jadwal-hari col3">{{dokter.jadwal}}</p>
                    <p class="list-item waktu col4">{{dokter.waktu}}</p>
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dokterList: [
                {
                    id: '110001',
                    nama: 'Musridah',
                    spesialisasi: 'Bidan',
                    jadwal: 'Kamis - Sabtu',
                    waktu: '09.00 - 15.00 WIB'
                },
                {
                    id: '110002',
                    nama: 'Indra S.',
                    spesialisasi: 'Mantri',
                    jadwal: 'Senin - Jumat',
                    waktu: '09.00 - 15.00 WIB'
                },
                {
                    id: '110003',
                    nama: 'Siswati R.',
                    spesialisasi: 'Bidan',
                    jadwal: 'Selasa - Kamis',
                    waktu: '09.00 - 15.00 WIB'
                },
                {
                    id: '110004',
                    nama: 'Adit',
                    spesialisasi: 'Mantri',
                    jadwal: 'Kamis - Sabtu',
                    waktu: '09.00 - 15.00 WIB',
                },
            ]
        }
    }
}
</script>

<style scoped>
* {
    font-family: 'Lato', sans-serif;
}
html {
    /* width: 1440px; */
    /* height: 1200px; */
    background-color: #F6F8FB;
}
body {
    margin: 0;
}
.main-container {
    /* margin-left: 256px; */
    margin-top: 88px;
}
ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}
h1, h2, h3, h4, h5, .table-header {
    margin: 0;
}
li, p {
    margin: 0;
}
h1 {
    font-size: 40px;
    padding-left: 52px;
    margin-bottom: 15px;
    margin-top: 35px;
    text-align: left;
}
h5 {
    text-align: left;
}
/* TABLE BASE STYLINGS */
.table-outer-container {
    width: 1110px;
    margin-right: 45px;
    margin-left: 29px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
}
.table-header-container {
    /* width: 100%; */
    display: flex;
    flex-direction: row;
    background-color:rgba(232, 232, 232, 0.2);
}
.table-title {
   padding-left: 24px; 
   padding-top: 24px;
   padding-bottom: 18px;
}
.table-header {
    padding-left: 24px;
    padding-top: 19px;
    padding-bottom: 17px;
}
.col1, .col2, .col3, .col4, .col5 {
    width: 160px;
}
.content-item {
    display: flex;
    flex-direction: row;
    border-top: 1px solid #E8E8E8;
    border-bottom: 1px solid #E8E8E8;
}
.content-item p {
    padding-left: 24px;
    padding-top: 18px;
    padding-bottom: 18px;
}
/* CUSTOM STYLE */
/* REKAM MEDIS */
.biodata {
    display: flex;
    display: none;
    flex-direction: row;
    max-height: 134px;
    max-width: 968px;
    margin-left: 29px;
    justify-content: flex-start;
}
.photo-container {
    height: 134px;
    width: 134px;
    background-color: black;
    border-radius: 50%;
}
.biodata-container {
    display: flex;
    flex-direction: row;
    width: 816px;
    margin-left: 18px;
    justify-content: space-between;
}
.biodata-item p, .biodata-item h5{
    font-size: 15px;
}
.biodata-content {
    align-items: center;
}
.biodata-item, .tindakan-item {
    display: flex;
    flex-direction: row;
    height: 19px;
    margin: auto;
    margin-bottom: 19px;
}
.biodata-item h5, .tindakan-item h5 {
    width: 165px;
}
.isi-rekam {
    max-height: 280px;
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.isi-rekam::-webkit-scrollbar {
    display: none;
}
.rencana-tindakan {
    margin-top: 92px;
    margin-left: 29px;
    height: 271px;
}
.rencana-tindakan h3 {
    margin-bottom: 39px;
}
.tindakan-wrapper {
    display: flex;
    flex-direction: row;
}
.tindakan-keterangan {
    margin-left: 74px;
}
.tindakan-keterangan input {
    width: 479px;
    height: 100px;
    padding: 5px;
}
.input-btn {
    height: 45px;
    width: 201px;
    background-color: rgba(47,128,237,1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    color: white;
    border: none;
    outline: none;
    border-radius: 4px;
}
.content-update {
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
}
.edit-btn {
    font-size: 20px;
    margin-right: 20px;
}
.check-btn {
    font-size: 30px;
    color: #2958E6;
}
</style>