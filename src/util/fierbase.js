import firebase from 'firebase/app'
import  'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAWC8a3xVsFmJeImjJ4hWjXnJ3vSsU9XVk",
    authDomain: "ecommerc-project.firebaseapp.com",
    projectId: "ecommerc-project",
    storageBucket: "ecommerc-project.appspot.com",
    messagingSenderId: "317182292695",
    appId: "1:317182292695:web:557ec59895ddfa97977692"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase