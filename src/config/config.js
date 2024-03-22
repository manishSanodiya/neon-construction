import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBu5oEQryLegsfchKOUn7-QxftXGuF7kwk",
  authDomain: "resume-scorer-5a9f4.firebaseapp.com",
  projectId: "resume-scorer-5a9f4",
  storageBucket: "resume-scorer-5a9f4.appspot.com",
  messagingSenderId: "1036682061650",
  appId: "1:1036682061650:web:82aa88eca8444a83ca3c8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider};