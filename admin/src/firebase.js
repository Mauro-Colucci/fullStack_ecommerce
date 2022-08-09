// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    //hide yo' key
  apiKey: "AIzaSyAkE2IJCR8tjQqURH4euHMv6nhwCYxVQIs",
  authDomain: "admin-dash---ecommerce.firebaseapp.com",
  projectId: "admin-dash---ecommerce",
  storageBucket: "admin-dash---ecommerce.appspot.com",
  messagingSenderId: "813629890030",
  appId: "1:813629890030:web:c9bc8964f66728b53302ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app