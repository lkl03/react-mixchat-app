import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "@firebase/firestore";

const firebaseApp = {
    apiKey: "AIzaSyB3qlQgYlJFU78MtDPjA0l2EpHI1Ys6u5g",
    authDomain: "mixchat-9de40.firebaseapp.com",
    projectId: "mixchat-9de40",
    storageBucket: "mixchat-9de40.appspot.com",
    messagingSenderId: "19512937801",
    appId: "1:19512937801:web:1d251976525cd7de749e98"
}

const app = initializeApp(firebaseApp);

const db = getFirestore(app)

const auth = getAuth(app)

export{app, db, auth}