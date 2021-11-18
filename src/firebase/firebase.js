import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCTUi_eXEypmQGOx8mSWT0TTm9QpJPS3bM",
    authDomain: "nicolas-app-f1882.firebaseapp.com",
    projectId: "nicolas-app-f1882",
    storageBucket: "nicolas-app-f1882.appspot.com",
    messagingSenderId: "1058680240590",
    appId: "1:1058680240590:web:9f6f7e76389aca8a23939f"
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db;