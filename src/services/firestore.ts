import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAXGsBqrbx2cIpmqbhHV_A8o7tTtwUxcb8",
    authDomain: "linkmanager-51d43.firebaseapp.com",
    databaseURL: "https://linkmanager-51d43.firebaseio.com",
    projectId: "linkmanager-51d43",
    storageBucket: "linkmanager-51d43.appspot.com",
    messagingSenderId: "644951641898",
    appId: "1:644951641898:web:144cdfc78113e59eb05853"
}
firebase.initializeApp(config);
firebase.firestore();

export default firebase
