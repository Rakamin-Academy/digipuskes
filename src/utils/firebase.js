// import * as firebase from 'firebase/app'
import 'firebase/auth'
import firebase from 'firebase'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyCH5CeLKNFqrtMRF6AUjKDFYgPZnDAnSeo",
    authDomain: "digipuskes.firebaseapp.com",
    databaseURL: "https://digipuskes.firebaseio.com",
    projectId: "digipuskes",
    storageBucket: "digipuskes.appspot.com",
    messagingSenderId: "410418692503",
    appId: "1:410418692503:web:550267ccacc431316bc4d2",
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
// const auth = firebase.auth()

// export utils/refs
export {
  db,
}