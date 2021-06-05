import {FirebaseApp} from 'firebase/app';
import * as Firebase from 'firebase/app';

function initializeFirebase() : FirebaseApp{    
    const firebaseConfig = {
        apiKey: "AIzaSyA6_m8bNNHBV-64GhV04K1zMcZrnSpxOTk",
        authDomain: "portal-joya.firebaseapp.com",
        databaseURL: "http://localhost:9000/?ns=portal-joya",
        projectId: "portal-joya",
        storageBucket: "portal-joya.appspot.com",
        messagingSenderId: "849394827714",
        appId: "1:849394827714:web:edfb81808b2927ce2e965b",
        measurementId: "G-8L2LDZEW9G"
      };   
      //initialize Firebase 
      if(!Firebase.getApps().length) 
        return Firebase.initializeApp(firebaseConfig);  
      else
        return Firebase.getApp();
      
}
  
  export default initializeFirebase;