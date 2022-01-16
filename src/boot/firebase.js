import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyBVw9BV_iPnqeAHpf8L1VMoEEW0U7RkMso",
  authDomain: "qwitter-a38db.firebaseapp.com",
  projectId: "qwitter-a38db",
  storageBucket: "qwitter-a38db.appspot.com",
  messagingSenderId: "434855552429",
  appId: "1:434855552429:web:1e25b6bb7857b9d17a2d24",
  measurementId: "G-ZXHGE7F78B"
}

firebase.initializeApp(firebaseConfig)

let db = firebase.firestore()

export default db
