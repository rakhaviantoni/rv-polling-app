import firebase from "firebase"
import "firebase/firestore"

const config = {
    apiKey: "AIzaSyBX4g-OIHhapU2MG1z8Ag1-fJlyHErWlC4",
    authDomain: "rv-polling-a.firebaseapp.com",
    databaseURL: "https://rv-polling-a.firebaseio.com",
    projectId: "rv-polling-a",
    storageBucket: "rv-polling-a.appspot.com",
    messagingSenderId: "613672487594"
}

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.store = firebase.firestore;
    this.auth = firebase.auth;
  }

  get polls() {
    return this.store().collection('polls');
  }
}

export default new Firebase();