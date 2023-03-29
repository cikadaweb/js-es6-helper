//перменные объявленные через let видны только внутри тех в фигурных скобок, в которых они объявлены
// let a = 24;

// if (true) {
//   let a = 42;
//   console.log('a', a);
// }

// console.log(a);

// Hoisting  let не можешь обращаться до объявления

// b = 20;
// console.log(b);
// var b = 10;

// такое возмонжно
// function hoisted() {
//   age = 26;
// }

// let age;
// hoisted();
// console.log(age);

//Const

// ошибка
// const COLOR = '#ffeebb';
// COLOR = '#000';
// console.log(COLOR);

// но с элементами массива нам работать можно
const array = [1, 2, 3, 5, 8];

console.log(array);

array.push(13);

console.log(array);

// такой же прикол с объектами
const obj = {a: 42};
obj.name = 'Adel';
console.log(obj);