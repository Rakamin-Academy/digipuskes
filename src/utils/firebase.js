// import * as firebase from 'firebase/app'
import 'firebase/auth'
import firebase from 'firebase'
import 'firebase/firestore'
import {fireConfig} from './Config'

// firebase init - add your own config here
const firebaseConfig = fireConfig
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
// const auth = firebase.auth()

// export utils/refs
export {
  db,
}