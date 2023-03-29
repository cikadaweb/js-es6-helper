//Rest если не знаем какое кол-во параметров поступает в функцию, то применяется (...)

// без Rest
// function average(arr) {
//   return Array.from(arguments).reduce((acc, i) => acc += i, 0) / arguments.length;
// }

// console.log(average(10, 20, 30, 40));

// C Rest
// function average(...args) {
//   return args.reduce((acc, i) => acc += i, 0) / args.length;
// }

// console.log(average(10, 20, 30, 40));

//  Spread разворачивает массив по сути

// const array = [1, 2, 3, 5, 8, 13];
// console.log(...array);

// // //раньше
// // console.log(Math.max.apply(null, array));

// // со спредом
// console.log(Math.max(...array));

// // клонируем массив
// const fib = [...array];
// console.log(fib);

// Destructuring Деструкторизация (позволяет быстро получать значения)

// const array2 = [1, 2, 3, 5, 8, 13];

// // раньше
// // const a = array2[0];
// // const b = array2[2];
// // сейчас
// const [a, b] = array2;
// const [c, d, ...e] = array2;
// const [f, ,g] = array2;

// console.log(a, b);
// console.log(c, d, e);
// console.log(f, g);

//Object
const address = {
  country: "Russia",
  city: "Moscow",
  street: "Lenina",
  concat: function () {
    return `${this.country}, ${this.city}, ${this.street}`;
  },
};
//console.log(address.concat());

// const {city, country, street = 'Tverskaya', concat: addressConcat} = address;

// console.log(addressConcat.call(address));
// console.log(street);

// используем деструкторизацию
const { city, ...rest } = address;
console.log(city);
console.log(rest);

// создаем новый объект Spread
const newAddress = { ...address, street: "Tverskaya", code: 123 };

console.log(newAddress);
