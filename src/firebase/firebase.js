//import * as firebase from 'firebase';
import firebase from "firebase/app";
import "firebase/database";
//import "firebase/analyctics";
import moment from "moment";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

/*
const firebaseConfig = {
    apiKey: "AIzaSyC3EbRbuWMumoAhvhXfDrLM7K_Fsx3tYV4",
    authDomain: "dkolomyexpensify.firebaseapp.com",
    databaseURL: "https://dkolomyexpensify-default-rtdb.firebaseio.com",
    projectId: "dkolomyexpensify",
    storageBucket: "dkolomyexpensify.appspot.com",
    messagingSenderId: "47888476609",
    appId: "1:47888476609:web:f91bc238f4e29e9b60a740",
    measurementId: "G-JH0GP3LXLY"
  };
*/
/*
var firebaseConfig = {
    apiKey: "AIzaSyBImCka_CulEFlGtKBJVTH9fD4djeS4lUE",
    authDomain: "dkolomyexensify-test.firebaseapp.com",
    databaseURL: "https://dkolomyexensify-test-default-rtdb.firebaseio.com",
    projectId: "dkolomyexensify-test",
    storageBucket: "dkolomyexensify-test.appspot.com",
    messagingSenderId: "939191763445",
    appId: "1:939191763445:web:fff042dd913c801c2160bc",
    measurementId: "G-RJVY64D5H1"
  };
*/

firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const database = firebase.database();

export { firebase, database as default };













// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').push({
//     description: 'Rent', 
//     note: '', 
//     amount: 109500, 
//     createdAt: 972367462323
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     //console.log(snapshot.val());
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
//   })
//   .catch((e) => {
//     console.log('Error',e);
//   });

// database.ref('expenses').push({
//     description: 'Phone bill', 
//     note: '', 
//     amount: 5900, 
//     createdAt: 972367462323
// });

// database.ref('expenses').push({
//     description: 'Food', 
//     note: '', 
//     amount: 1200, 
//     createdAt: 972367462323
// });

// //database.ref().off();
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// });


// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error',e);
// });
// database.ref().off(onValueChange);

// setTimeout(() => {
//     database.ref('age').set(44);
// }, 3500);

// database.ref().set({
//     name: "Dmitry K",
//     age: 59,
//     isSingle: true,
//     location: {
//         city: "Nashua",
//         country: "United States"
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('Error', e);
// });

// database.ref().update({
//     name: 'K Dmitry',
//     age: 45,
//     job: 'Software Developer',
//     isSingle: null
// }).then(() => {
//     console.log('Successly updated');
// }).catch((e) => {
//     console.log('Error:', e);
// });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Successly removed');
//     })
//     .catch((e) =>{
//         console.log('Error:', e);
//     });