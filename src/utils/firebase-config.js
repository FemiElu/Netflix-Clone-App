import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnaFqnHRUzfdi0ivC3klZdNI8bVaH_1-8",
  authDomain: "amazing-netflixclone-app.firebaseapp.com",
  projectId: "amazing-netflixclone-app",
  storageBucket: "amazing-netflixclone-app.appspot.com",
  messagingSenderId: "25060571706",
  appId: "1:25060571706:web:7af0aae98262d672d49303",
  measurementId: "G-VPED4X3YFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firbaseAuth = getAuth(app); 