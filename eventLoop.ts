setTimeout(function timeout() { // макрозадача
 console.log('Таймаут');
 }, 0);

let p = new Promise(function(resolve, reject) {
 console.log('Создание промиса');
 resolve();
 });

p.then(function(){ // микрозадача
 console.log('Обработка промиса');
 });

console.log('Конец скрипта');

// Ответ: 'Создание промиса', 'Конец скрипта', 'Обработка промиса', 'Таймаут'

____________________________________________________________________________________

console.log(1); 

setTimeout(() => console.log(2)); // макрозадача

Promise.resolve().then(() => console.log(3)); // микрозадача

Promise.resolve().then(() => setTimeout(() => console.log(4))); // микрозадача с макрозадачей внутри

Promise.resolve().then(() => console.log(5)); // микрозадача

setTimeout(() => console.log(6)); //

console.log(7);

console.log(1)


// Ответ: 17135264

_____________________________________________________________________________________

console.log(1); 

setTimeout(() => console.log(2)); // макрозадача

Promise.reject(3).catch(console.log); // микрозадача

new Promise(resolve => setTimeout(resolve)).then(() => console.log(4)); // микрозадача с макрозадачей внутри

Promise.resolve(5).then(console.log); // микрозадача

console.log(6);

setTimeout(() => console.log(7),0); // макрозадача


// Ответ: 1635247

____________________________________________________________________________________

const myPromise = (delay) => new Promise((res, rej) => { setTimeout(res, delay) }) // микрозадача с макрозадачей внутри

setTimeout(() => console.log('in setTimeout1'), 1000);  // макрозадача

myPromise(1000).then(res => console.log('in Promise 1'));  // setTimeout(res, 1000).then(res => console.log('in Promise 1'))

setTimeout(() => console.log('in setTimeout2'), 100);  // макрозадача

myPromise(2000).then(res => console.log('in Promise 2')); // setTimeout(res, 2000).then(res => console.log('in Promise 2'))

setTimeout(() => console.log('in setTimeout3'), 2000);  // макрозадача

myPromise(1000).then(res => console.log('in Promise 3')); // setTimeout(res, 1000).then(res => console.log('in Promise 3'))

setTimeout(() => console.log('in setTimeout4'), 1000);  // макрозадача

myPromise(5000).then(res => console.log('in Promise ')); // setTimeout(res, 5000).then(res => console.log('in Promise '))

// Ответ: 'in setTimeout2', 'in setTimeout1', 'in Promise 1', 'in Promise 3',
//        'in setTimeout4', 'in Promise 2', 'in setTimeout3', 'in Promise '


