import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDbB8TlciMHc4oErYZx69MVbjUior0SPm0",
    authDomain: "expensify-react-77029.firebaseapp.com",
    databaseURL: "https://expensify-react-77029.firebaseio.com",
    projectId: "expensify-react-77029",
    storageBucket: "expensify-react-77029.appspot.com",
    messagingSenderId: "5927958185"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set({
    name: 'Javelin Cairne',
    age: 31,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    location: {
        town: 'Littlesmead',
        Kingdom: 'Losgaardain'
    }
}).then(() => {
    console.log('Saved');
}).catch((e) => {
    console.log('error', e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});

// database.ref('isSingle').remove().then(() => {
//     console.log('The dark deed you have requested is done master.');
// }).catch((e) => {
//     console.log('Couldn\'t remove');
// });