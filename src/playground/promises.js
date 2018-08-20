const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data');
        reject('oops');
    }, 1500);
});

console.log('before');

promise.then((data) =>{
    console.log(data);
}).then(() => {
    console.log('does this run?');
}).catch((error) => {
    console.log('error: ' + error);
});

console.log('after');