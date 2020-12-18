import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../utils/firebase'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        currentPatient: null,
        isLookingPatient: false,
        isLogin: false,
        PatientList: [],
        currentStaff: 'Adi',
        //percobaan
        serchedPatientData: {
            // name: 'Jack',
            // parentName: 'Joko',
            // dateOfBirth: '12 Dec 2019',
        },
        currentPage: 'dashboard',
    },
    getters: {
        patientListget: (state) => {
            return state.PatientList
        }
    },
    mutations: {
        login(state) {
            state.isLogin = true;
            // state.currentStaff = staffData;
        },
        getPatientList(state, patientData) {
            state.PatientList = patientData;
        },
        getCurrentPatient(state, patientData) {
            state.isLookingPatient = true;
            state.currentPatient = patientData;
        },
        tindakanPatient(state, newTindakan) {
            state.currentPatient.ImmunisasiList = [...state.currentPatient.ImmunisasiList, newTindakan]
        },
        addPatient(state, newPatient) {
            state.PatientList = [...state.PatientList, newPatient]
        },
        changePage(state, newPage) {
            state.currentPage = newPage
        }
    },
    actions: {
      // API Key 21059414113068a2e3b8e2e21349cb28
    async fetchPatientList({commit}, payload) {
        if(!payload) {
            let patientArr = []
            await db.collection('Patients').get()
            .then(snapshot => {
              snapshot.forEach(el => {
                //   console.log(el.data());
                    patientArr.push(el.data())
                  commit('getPatientList', patientArr)
                })
            })
            
            .catch(er => console.log(er))
        }
        else if (payload) {
            commit('getPatientList', payload)
        }
        // console.log(jack)
        // console.log('Fetch')
        // console.log(state.PatientList)
    }, //login dan dapat semua data pasien
    getPatientData({commit, state}, payload) {
        let toFind
        if(payload) {
            toFind = payload
        } else {
            toFind = state.serchedPatientData;
        }
        console.log(toFind)
        const result = state.PatientList.filter(el => el.name == toFind.name && el.parentName == toFind.parentName && el.dateOfBirth == toFind.dateOfBirth)
        // console.log(result[0])
        commit('getCurrentPatient', result[0])
    }, //click salah satu orang dan dapet datanya

    addNewPatient({commit}, payload) {
        (payload);
        commit('addPatient', payload)
    },

    loginStaff({commit}) {
        //if correct, then commit
        commit('login')
        // console.log(payload)
    }, //dapetin nama dan auth doang
    test() {
        console.log('Yey')
    },
    newPage({commit}, payload) {
        // console.log(payload)
        commit('changePage', payload)
    },

    addTindakan({commit}, payload) {
        //payload berupa tindakan
        // console.log(state.PatientList)
        commit('tindakanPatient', payload);
    },
    }
  })

 export default store;