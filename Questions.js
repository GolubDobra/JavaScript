Вопрос: Какова стоимость foo?

var foo = 10 + '20';

// foo = 30;

Вопрос: Каков будет вывод приведенного ниже кода?

console.log(0.1 + 0.2 == 0.3);

// false

Вопрос: Как бы вы это сделали?

const add = (a, b) => {
    if (b) {
        return a+b;
    }
    return (b) => {
        return a+b;
    }
}

add(2, 5); // 7
add(2)(5); // 7



Вопрос: Какое значение возвращается из следующего оператора?

"i'm a lasagna hog".split("").reverse().join("");


// goh angasal a m'i

Вопрос: Какова стоимость window.foo?

( window.foo || ( window.foo = "bar" ) );

// 'bar'

Вопрос: Каковы результаты двух приведенных ниже предупреждений?

var foo = "Hello";
(function() {
  var bar = " World";
  alert(foo + bar);
})();
alert(foo + bar);

// 'Hello World', 'bar' is not defined


Вопрос: Какова стоимость foo.length?

var foo = [];
foo.push(1);
foo.push(2);

// foo.length = 2

Вопрос: Какова стоимость foo.x?

var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};

// foo.x = undefined

Вопрос: Что печатает следующий код?

let cat = {
  name: 'Tom',
  isHunter: true
}

let mouse = {
  name: 'Jerry',
  isHunter: false
}

mouse = cat;
cat.isHunter = false;
mouse.isHunter = undefined;

console.log(mouse.isHunter);

// undefined

Вопрос: Что печатает следующий код?

console.log('one');

setTimeout(function() {
  console.log('two');
}, 0);

Promise.resolve().then(function() {
  console.log('three');
})

console.log('four');

// 'one', 'four', 'three', 'two'

Вопрос: В чем разница между этими четырьмя обещаниями?

doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);

//

Вопрос: Что выведет на консоль приведенный ниже код и почему?

(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

// a defined? false
// b defined? true

Вопрос: Рассмотрим две функции, приведенные ниже. Вернут ли они оба одно и то же? Почему или почему нет?

function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  return
  {
      bar: "hello"
  };
}

// { bar: "hello" };
// undefined


