import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBez4lJe6qWHSF4DUJgpokGGWzYLTX3lQ4",
    authDomain: "chocolattear-f5c21.firebaseapp.com",
    projectId: "chocolattear-f5c21",
    storageBucket: "chocolattear-f5c21.appspot.com",
    messagingSenderId: "652770620498",
    appId: "1:652770620498:web:80402da28cc2fa9f955b8b"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const auth = getAuth(app);
