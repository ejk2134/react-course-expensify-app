import * as firebase from 'firebase';

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(`${snapshot.key} is different.`);
// });

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // const expenses = [{
// //     description: 'Hand cake',
// //     note: 'Shaped like a hand for some reazon',
// //     amount: 3000,
// //     createdAt: 0
// // }, {
// //     description: 'Horse hair',
// //     note: 'For wigz',
// //     amount: 4000,
// //     createdAt: 100
// // }, {
// //     description: 'Upside-down pikcup',
// //     note: '... for reasons',
// //     amount: 300000,
// //     createdAt: 200
// // }];

// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             });
// //         });

// //         console.log(expenses);
// //     });

// // database.ref('expenses').on('value', (snapshot) => {
// //     const expenses = [];

// //     snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //     });

// //     console.log(expenses);
// // });

// // const firebaseNotes = {
// //     notes: {
// //         sdlkfj23: {
// //             id: 12,
// //             title: 'first note',
// //             body: 'This is my note',
// //         },
// //         slkdjq33: {
// //             id: '1234njk',
// //             title: 'second note',
// //             body: 'This is also my note',
// //         }
// //     }
// // };

// // const notes = [{
// //     id: 12,
// //     title: 'first note',
// //     body: 'This is my note',
// // }, {
// //     id: '1234njk',
// //     title: 'second note',
// //     body: 'This is also my note',
// // }];

// // database.ref('notes').set(notes);

// // database.ref('location/town')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     })
// //     .catch((e) => {
// //         console.log('error fetching data:', e);
// //     });

// // database.ref().set({
// //     name: 'Javelin Cairne',
// //     age: 31,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Google'
// //     },
// //     location: {
// //         town: 'Littlesmead',
// //         Kingdom: 'Losgaardain'
// //     }
// // }).then(() => {
// //     console.log('Saved');
// // }).catch((e) => {
// //     console.log('error', e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // });

// // database.ref('isSingle').remove().then(() => {
// //     console.log('The dark deed you have requested is done master.');
// // }).catch((e) => {
// //     console.log('Couldn\'t remove');
// // });