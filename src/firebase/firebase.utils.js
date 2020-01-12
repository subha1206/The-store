import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// const config = {
//     apiKey: "AIzaSyDuJekkEtPhd6qmgemPXTFGejKujt4yEpA",
//     authDomain: "the-store-850da.firebaseapp.com",
//     databaseURL: "https://the-store-850da.firebaseio.com",
//     projectId: "the-store-850da",
//     storageBucket: "the-store-850da.appspot.com",
//     messagingSenderId: "860410812273",
//     appId: "1:860410812273:web:667c6bf829c1c4238588d0",
//     measurementId: "G-TDXZ7HZPDB"
// };

const config = {
    apiKey: "AIzaSyDoMqyH5UbwahZIRfDhSPzMV70CUGqLC8s",
    authDomain: "the-store-2.firebaseapp.com",
    databaseURL: "https://the-store-2.firebaseio.com",
    projectId: "the-store-2",
    storageBucket: "the-store-2.appspot.com",
    messagingSenderId: "426588574372",
    appId: "1:426588574372:web:bf52ce87cda1d97c114c31",
    measurementId: "G-Y1HCPTQYX3"
  };

export const createUserProfileDocument = async (userAuth, additioanlData) =>{
    if (!userAuth) return;
    const userRef =firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()
    if(!snapshot.exists){
      const {displayName, email}=userAuth;
      const createdAt = new Date();

      try{
          await userRef.set({
              displayName,
              email,
              createdAt,
              ...additioanlData
          })
      } catch (error) {
          console.log('error creating user', error.message);
          
      }
    }
    return userRef;
}

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
