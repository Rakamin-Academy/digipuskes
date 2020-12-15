<template>
  <div>
    <div class="wrapper">
      <form>
        <div class="container">
          <h1>Pendaftaran Pasien</h1>
          <div class="wrapper2">
            <div class="radio1">
              <label>
                Status Pasien : </label
              ><br />
              <input type="radio" value="Sudah Terdaftar" name="statusDaftar" checked > Sudah Terdaftar   
              <input type="radio" value="Baru Mendaftar" name="statusDaftar" />
              Baru Mendaftar
            </div>
            <div class="container2">
              <div class="inputNama">
                <label> Nama Pasien : </label>
                <input
                  v-model="name"
                  type="text"
                  name="nama"
                  placeholder="nama"
                  size="10"
                  required
                />
              </div>
              <div>
                <label for="dateofbirth">Tanggal Lahir : </label>
                <input
                  v-model="dateOfBirth"
                  type="date"
                  name="dateofbirth"
                  id="dateofbirth"
                />
              </div>
              <div class="inputOrtu">
                <label> Nama Orang Tua : </label>
                <input
                  v-model="parentName"
                  type="text"
                  name="nama"
                  placeholder="nama orangtua"
                  size="10"
                  required
                />
              </div>
              <div class="telpon">
                <label>
                  No. Telpon :
                </label>
                <input
                  v-model="parentNo"
                  type="text"
                  name="phone"
                  placeholder="nomor telepon"
                  size="10"
                  required
                />
              </div>
              <div class="email">
                <label>
                  Alamat Email :
                </label>
                <input
                  v-model="parentEmail"
                  type="text"
                  name="email"
                  placeholder="alamat email"
                  size="10"
                  required
                />
              </div>
              <div class="alamat">
                Alamat Tinggal :
                <textarea
                  v-model="address"
                  cols="50"
                  rows="3"
                  placeholder="alamat domisili pasien"
                  value="address"
                  required
                >
                </textarea>
              </div>
            </div>
          </div>
          <button @click.prevent="addPatient" type="submit" class="registerbtn">
            DAFTAR
          </button>
        </div>
      </form>
    </div>
    <div class="tabelpasien">
      <table>
        <tr>
          <th>Nama Pasien</th>
          <th>Nama Orang Tua</th>
          <th>Tanggal Lahir Pasien</th>
          <th>Imunisasi Terakhir</th>
          <th>Dokter</th>
          <th>
            <span class="material-icons">
              Actions
            </span>
          </th>
        </tr>
        <tr v-for="el in patientList" :key="el.name">
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
    },
    data() {
        return {
            name: '',
            dateOfBirth: '',
            parentName: '',
            parentNo: '',
            parentEmail:'',
            address:''            
        }
    },
}
</script>

<style scoped>
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