<template>
  <div class="component-container">
    <div class="main">
      <input @keyup="searchPatient" v-model="search" class="search-input" type="text" name="" id="" placeholder="cari...">
      <button class="logout-btn" @click="logout">Logout</button>
    </div>
      <div class="suggestions">
        <div @click="changePatient(el.name, el.parentName, el.dateOfBirth)" class="suggested" v-for="el in suggestedList" :key="el.name">
          <div class="suggested-container">
            <p>Patient Name:</p>
            <p>{{el.name}}</p>
          </div>
          <div class="suggested-container">
            <p>Parent Name:</p>
            <p>{{el.parentName}}</p>
          </div>
          
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      suggestedList: [],
    }
  },
  methods: {
    searchPatient() {
      if(this.search.length >= 3) {
        console.log(this.patientList)
        this.suggestedList = this.patientList.filter(el => el.name.toLowerCase().includes(this.search))
        console.log(this.suggestedList)
      }
      else {
        this.suggestedList = []
      }
    },
    changePatient(name, parentName, dateOfBirth) {
          const newData = {
            name, parentName, dateOfBirth
          }
          this.$store.dispatch('getPatientData', newData) 
          this.$router.push('rekamMedis')
          // console.log(newData)
          this.search= ''
          // this.suggestedList = []
    },
    logout() {
      console.log('logged out')
      this.$store.dispatch("logout");
    }
  },
  computed: {
      patientList() {
              return this.$store.state.PatientList
      }
  },
  watch: {
    search: function() {
      if(this.search == '') {
        this.suggestedList = []
      }
    }
  }
}
</script>

<style>
.search-input {
  width: 350px;
  height: 40px;
  border-radius: 100px;
  background-color:#FFFFFF;
  border: 1px solid transparent;
  padding: 12px 42px;
  outline: none;
  margin-top: 24px;
}
.suggested {
  display: flex;
  margin-left: 50px;
  width: 300px;
  justify-content: space-between;
  background-color: rgba(224, 224, 224, 0.781);
  padding: 5px;
}
.suggested-container {
  display: flex;
  margin: 0;
}
p {
  margin: 0;
}
.logout-btn {
  margin-left: 40vw;
}
</style>