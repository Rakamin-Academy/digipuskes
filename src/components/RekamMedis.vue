<template>
<div class="component-container">
    <h1 v-if="!patientData">Silahkan Pilih Pasien</h1>
    <div v-if="patientData" class="main-container">
        <h1 class="header">Rekam Medis Pasien</h1>
        <div class="biodata">
            <div class="photo-container"></div>
            <div class="biodata-container">
                <div class="biodata-content left ">
                <div class="biodata-item">
                    <h5>Nama Pasien</h5>
                    <p>{{patientData.name}}</p>
                </div>
                <div class="biodata-item">
                    <h5>Tanggal Lahir</h5>
                    <p>{{patientData.dateOfBirth}}</p>
                </div>
                <div class="biodata-item">
                    <h5>Nama Orang Tua/Wali</h5>
                    <p>{{patientData.parentName}}</p>
                </div>
                </div>
                <div class="biodata-content right">
                    <div class="biodata-item">
                        <h5>Nomor Telpon</h5>
                        <p>{{patientData.parentNo}}</p>
                    </div>
                    <div class="biodata-item">
                        <h5>Email Orang Tua/Wali</h5>
                        <p>{{patientData.parentEmail}}</p>
                    </div>
                    </div>
            </div>
        </div>
        <div class="table-outer-container">
            <h3 class="table-title">Daftar Tindakan</h3>
            <div class="table-header-container">
                <h4 class="table-header col1">Jenis Tindakan</h4>
                <h4 class="table-header col2">Tanggal</h4>
                <h4 class="table-header col3">Waktu</h4>
                <h4 class="table-header col4">Petugas</h4>
                <h4 class="table-header col5">Remarks</h4>
            </div>
            <ul class="content-list isi-rekam">
                <li v-for="el in patientData.ImmunisasiList" :key="el.name" class="content-item">
                    <p class="list-item nama col1">{{el.name}}</p>
                    <p class="list-item col2">{{el.date}}</p>
                    <p class="list-item jadwal-hari col3">{{el.date}}</p>
                    <p class="list-item waktu col4">{{el.doctor}}</p>
                    <p class="list-item waktu col5">{{el.remarks}}</p>
                    <div class="content-update">
                        <!-- Insert Icons -->
                        <font-awesome-icon :icon="['fas', 'trash']" class="edit-btn" @click="deleteData(el)"></font-awesome-icon>
                        <font-awesome-icon v-if="!el.isDone" :icon="['fas', 'check-square']" class="check-btn" @click="toggleDone(el)"></font-awesome-icon>
                    </div>
                    <p class="list-item waktu col5">{{el.isDone ? 'Sudah Terlaksana' : 'Belum Terlaksana'}}</p>
                </li>
            </ul>
        </div>
        <div class="rencana-tindakan">
            <h3 class="div-header">Rencana Tindakan</h3>
            <div class="tindakan-wrapper">
                <div class="tindakan-content">
                    <div class="tindakan-item">
                        <h5>Nama Petugas</h5>
                        <input v-model="dokter" type="text">
                    </div>
                    <div class="tindakan-item">
                        <h5>Tanggal</h5>
                        <input v-model="tanggal" type="date" name="" id="">
                    </div>
                    <div class="tindakan-item">
                        <h5>Vaksin</h5>
                        <input v-model="vaksin" type="text">
                    </div>
                    </div>
                <div class="tindakan-keterangan">
                    <h5>Keterangan</h5>
                    <textarea v-model="remarks" placeholder="beri keterangan..." rows="4" cols="50"></textarea>
                </div>
                
            </div>
            <button @click="addTindakan" class="input-btn">INPUT</button>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    data() {
        return {
            dokter: '',
            tanggal: '',
            remarks: '',
            vaksin: '',
            isEditing: false,
        }
    },
    beforeMounted() {
        this.$store.dispatch('getPatientData')
        // console.log(this.patientData)
    },
    computed: {
        patientData() {
            return this.$store.state.currentPatient
        }
    },
    methods: {
        deleteData(el) {
            // console.log(el);
            // console.log(this.patientData)
            this.$store.dispatch('deleteTindakan', el)
        },
        toggleDone(el) {
            console.log(el)
            el.isDone = true
        },
        clearField() {
            this.dokter = '';
            this.tanggal = '';
            this.remarks = '';
        },
        addTindakan() {
            if(this.dokter != '' && this.date != '' && this.name != '') {
            const newTindakan = {
                doctor: this.dokter,
                date: this.tanggal,
                remarks: this.remarks != '' ? this.remarks : '-',
                name: this.vaksin,
                isDone: false,
                };
            console.log(newTindakan)
            this.$store.dispatch('addTindakan', newTindakan)
            this.clearField()
            }
        }
    }
}
</script>

<style>
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
h1, h2, h3, h4, h5 {
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
    flex-direction: row;
    max-height: 134px;
    max-width: 968px;
    margin-left: 29px;
    justify-content: flex-start;
}
.photo-container {
    min-height: 134px;
    min-width: 134px;
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
</style>>