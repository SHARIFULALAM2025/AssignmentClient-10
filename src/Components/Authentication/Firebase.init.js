import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDRRCFfZH14hDYgGd8MzyAU1Cei-AK0-vY",
    authDomain: "homenest-ec506.firebaseapp.com",
    projectId: "homenest-ec506",
    storageBucket: "homenest-ec506.firebasestorage.app",
    messagingSenderId: "303615669045",
    appId: "1:303615669045:web:396adf40772686bac0127c",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
