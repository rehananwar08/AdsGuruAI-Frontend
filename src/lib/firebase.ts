import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Aapki Secret Firebase Keys
const firebaseConfig = {
  apiKey: "AIzaSyA2Lg0tqtiahO_sXvvY-aCTNoPgi6AcfkA",
  authDomain: "adsguruai-ac5fc.firebaseapp.com",
  projectId: "adsguruai-ac5fc",
  storageBucket: "adsguruai-ac5fc.firebasestorage.app",
  messagingSenderId: "321669774460",
  appId: "1:321669774460:web:a16a09e8f88c4c9dff9df9"
};

// Website load hone par Firebase ko ek hi baar start karne ka magic code
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { app, auth };
