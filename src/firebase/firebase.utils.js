import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDuJekkEtPhd6qmgemPXTFGejKujt4yEpA",
    authDomain: "the-store-850da.firebaseapp.com",
    databaseURL: "https://the-store-850da.firebaseio.com",
    projectId: "the-store-850da",
    storageBucket: "the-store-850da.appspot.com",
    messagingSenderId: "860410812273",
    appId: "1:860410812273:web:667c6bf829c1c4238588d0",
    measurementId: "G-TDXZ7HZPDB"
};

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
