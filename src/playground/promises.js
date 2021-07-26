const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is my resolve data');
//        reject('Some error');
    }, 1500)
});

console.log('Before');

promise.then((data) => {
    console.log('Success: ',data);
}).catch((err) => {
    console.log('Error: ', err);
});

console.log('After');