import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB-hc9WPkH_WGR5P2qSrN25tF1LIYAIA1U",
    authDomain: "whatsapp-ee737.firebaseapp.com",
    databaseURL: "https://whatsapp-ee737.firebaseio.com",
    projectId: "whatsapp-ee737",
    storageBucket: "whatsapp-ee737.appspot.com",
    messagingSenderId: "795038265337",
    appId: "1:795038265337:web:58f296894bcec7a432d728",
    measurementId: "G-GYBDQSGR6N"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db

