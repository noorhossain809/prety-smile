import { initializeApp } from "firebase/app";
import firebaseConfig from "../Login/firebase.config";


const initializeFirebase = () => {
    initializeApp(firebaseConfig)
}
export default initializeFirebase;