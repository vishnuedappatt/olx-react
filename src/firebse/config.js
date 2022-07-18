import firebase from 'firebase';
import 'firebase/auth'
// for storing number
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAYFIWMgor5b3m1uL_Re4cc1tHPpALMM4U",  
    authDomain: "olx-clone-415d2.firebaseapp.com",  
    projectId: "olx-clone-415d2",  
    storageBucket: "olx-clone-415d2.appspot.com",
      messagingSenderId: "247566810123",  
    appId: "1:247566810123:web:2ba7caf65da185cbd15b0e",  
    measurementId: "G-N56VNG7RTD"
  
  };

 export default firebase.initializeApp(firebaseConfig)