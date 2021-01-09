<template>
  <div class="component-container">
      <div class="tabel-vaksin">

      </div>
      <div class="tabelpasien">
      <table>
        <tr>
          <th>Nama Pasien</th>
          <th>Nama Orang Tua</th>
          <th>Tanggal Lahir Pasien</th>
          <th>Imunisasi Terakhir</th>
          <th>Status</th>
          <th>Tanggal Pelaksanaan</th>
          <th>Dokter</th>
          <th>
            <span class="material-icons">
              Actions
            </span>
          </th>
        </tr>
        <tr @click="changePatient(el.name, el.parentName, el.dateOfBirth)" v-for="el in patientList" :key="el.name">
          <td>{{ el.name }}</td>
          <td>{{ el.parentName }}</td>
          <td>{{ el.dateOfBirth }}</td>
          <td>
            {{
              el.ImmunisasiList.length > 0
                ? el.ImmunisasiList[el.ImmunisasiList.length - 1].name
                : "-"
            }}
          </td>
          <td>
            {{
              el.ImmunisasiList[el.ImmunisasiList.length - 1].isDone ? 'Sudah Terlaksana' : 'Akan Dilaksanakan'
            }}
          </td>
          <td>
            {{
              el.ImmunisasiList[el.ImmunisasiList.length - 1].date
            }}
          </td>
          <td>
            {{
              el.ImmunisasiList.length > 0
                ? el.ImmunisasiList[el.ImmunisasiList.length - 1].doctor
                : "-"
            }}
          </td>
          <td>
            <span class="material-icons">
              <font-awesome-icon :icon="['fas', 'pencil-alt']" class="edit-btn" @click="editData(el.name)"></font-awesome-icon>
            </span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        patientList() {
            return this.$store.state.PatientList
        }
    },
    methods:{
        addPatient() {
            const newPatient = {
                name: this.name,
                dateOfBirth: this.dateOfBirth,
                parentName: this.parentName,
                parentNo: this.parentNo,
                parentEmail: this.parentEmail,
                address: this.address,
                ImmunisasiList:[]
                };
            this.$store.dispatch('addNewPatient',newPatient)       
        },
        changePatient(name, parentName, dateOfBirth) {
          const newData = {
            name, parentName, dateOfBirth
          }
          this.$store.dispatch('getPatientData', newData) 
          this.$router.push('rekamMedis')
          // console.log(newData)
        }
}
}
</script>

<style scoped>

.tabel-vaksin {
    background: url(https://i.pinimg.com/originals/1f/a3/c6/1fa3c678aac33d5cbf43f135a1a95b85.png);
    width: 731px;
    height: 467px;
    margin: auto;
}
.wrapper {
  font-family: 'Montserrat', sans-serif;
  background-color: rgb(255, 255, 255);
}
.wrapper2 {
  display: grid;
  font-size: 12px;
}

.container {
  padding: 50px;
  background-color: #e5e5e5;
}

.container2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  }

[type="date"] {
  background: #fff
    url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)
    97% 50% no-repeat;
}
[type="date"]::-webkit-inner-spin-button {
  display: none;
}
[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
}

input[type="text"],
input[type="password"],
textarea {
  width: 80%;
  padding: 20px;
  margin: 15px 15px 22px 0;
  display: inline-block;
  border: none;
  background: #f1f1f1;
}
input[type="text"]:focus,
input[type="password"]:focus {
  background-color: orange;
  outline: none;
}
div {
  padding: 10px 0;
}
hr {
  border: 1px solid #f1f1f1;
  margin-bottom: 25px;
}
.registerbtn {
  background-color: #2f80ed;
  color: white;
  padding: 16px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  opacity: 0.9;
  border-radius: 25px;
  font-weight: bold;
}
.registerbtn:hover {
  opacity: 1;
}
table {
  font-family: 'Montserrat', sans-serif;
  border-collapse: collapse;
  width: 95%;
  align-items: center;
  margin-left: 10px;
  font-size: 15px;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: center;
  padding: 8px;
  }

tr:nth-child(even) {
  background-color: #dddddd;
}
nav {
  margin-left: 50px;
}
</style>