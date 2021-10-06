import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyBYC5u80Ar8PjnFaosl-ECYqJnJaMwbUqU',
    authDomain: 'femil-disney-plus-clone.firebaseapp.com',
    projectId: 'femil-disney-plus-clone',
    storageBucket: 'femil-disney-plus-clone.appspot.com',
    messagingSenderId: '378659456455',
    appId: '1:378659456455:web:44ad479c480ddb10f505e2',
    measurementId: 'G-P1HREBXWWS',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()

export { auth, provider, storage }
export default db
