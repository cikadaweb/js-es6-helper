//Symbol 7ый тип JS. Нужен чтобы задавать уникальные ключи. Уникальное значение.

const symbol = Symbol('demo');
const other = Symbol('demo');

// console.log(symbol);
// console.log(other);

// console.log(symbol === other);

// Как это можно использовать?

const obj = {
  name: 'Adel',
  demo: 'DEMO',
  [symbol]: 'meta',       // это их прямое предназначение

}

console.log(obj);

// поля Symbol сокрыты
// напомню данный цикл бежит не только по собственным полям, но и по прототипу
for (let key in obj) {
  console.log(key);
}