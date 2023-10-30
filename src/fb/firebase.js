import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBVDHEGhWyTSlInM1j8amla1EPq8356BX4",
  authDomain: "muslimawaaz-432c1.firebaseapp.com",
  databaseURL: "https://muslimawaaz-432c1.firebaseio.com",
  projectId: "muslimawaaz-432c1",
  storageBucket: "muslimawaaz-432c1.appspot.com",
  messagingSenderId: "642204247107",
  appId: "1:642204247107:web:4a2bde5529880182fbe0f6",
}
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth, firebaseConfig }