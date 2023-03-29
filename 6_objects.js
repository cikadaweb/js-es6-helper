const cityField = "city";
const job = "Frontend";

const person = {
  age: 26,
  name: "Adel",
  job,
  [cityField]: "Kazan", // динамические ключи
  "country-live": "Russia",

  // // раньше
  // toString: function() {
  //   return Object
  //     .keys(this)
  //     .filter(key => key !== 'toString')
  //     .map(key => this[key])
  //     .join(' ')

  //     // .keys(this)  ключи объекта
  //     // .filter(key => keу !== 'toString')   убираем вывод самой функции
  // }

  // сейчас
  print: () => "Person",
  toString() {
    return Object.keys(this)
      .filter((key) => key !== "toString")
      .map((key) => this[key])
      .join(" ");

    // .keys(this)  ключи объекта
    // .filter(key => keу !== 'toString')   убираем вывод самой функции
  },
};

// console.log(person.toString());
// console.log(person.print());
// console.log(person);

//Methods

const first = { a: 1 };
const second = { b: 2 };

// console.log(Object.is(20, 10)); // сравнение на эквивалентность

// создаем копию объекта без изменеия старого
// console.log(Object.assign({}, first, second));
// console.log(first);

const obj = Object.assign({}, first, {
  c: 2,
  d: 3,
});

// получаем массив состоящий из массивов по типу ключ = значение (типо в php ассоц массив)
console.log(Object.entries(obj));
console.log(Object.keys(obj));
console.log(Object.values(obj));
