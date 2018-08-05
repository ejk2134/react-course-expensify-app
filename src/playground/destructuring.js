// Object destructuring

// const person = {
//     name: 'Mickey Mouse',
//     age: 39,
//     location: {
//         city: 'Minneapolis',
//         temp: 69
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;
// console.log(publisherName);

// Array destructuring

const address = [];

const [, , state = 'Kansas'] = address;

console.log(`You are in ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumCost] = item;
console.log(`A medium ${itemName} costs ${mediumCost}`);