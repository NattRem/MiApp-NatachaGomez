import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCnBGyqaibtd8ulecAcO_j85UYyANagV1w",
    authDomain: "mi-app-whiskey.firebaseapp.com",
    projectId: "mi-app-whiskey",
    storageBucket: "mi-app-whiskey.appspot.com",
    messagingSenderId: "1066616527883",
    appId: "1:1066616527883:web:f591edce18dd7dc476fb0e"
};

const app = initializeApp(firebaseConfig);
export const getFirestoreApp = ()=>{
    return app
}