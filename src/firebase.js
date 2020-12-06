import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDIF52kiq10jSPIo0PYTn8dfedAJxFZWes",
  authDomain: "introspector-react.firebaseapp.com",
  databaseURL: "https://introspector-react.firebaseio.com",
  projectId: "introspector-react",
  storageBucket: "introspector-react.appspot.com",
  messagingSenderId: "300935630273",
  appId: "1:300935630273:web:c7d063abb00f066d137340",
  measurementId: "G-CKG54974GM"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;