// const array = [10, 20 ,30 , 40];

// const str = 'Hello';

// обращение к специальному полю - итератору
// console.log(array[Symbol.iterator]);
// console.log(str[Symbol.iterator]);


// получаем функцию итератора
// const iter = array[Symbol.iterator]();   // Object [Array Iterator] {}
// console.log(iter);

// значения берутся из массива
// console.log(iter.next());   
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// это не очень удобно поэтому в JS присутствует новый цикл for of ( он под капотом смотрит за итератором по сути)
// for (let item of array) {
//   console.log(item);
// }

// // свой собственный итератор
// const country = {
//   values: ['ru', 'kz', 'ua', 'by'],
//   [Symbol.iterator]() {
//     let i = 0;
//     return {
//       next: () => {
//         const value = this.values[i]
//         i++;
//         return {
//           done: i > this.values.length,
//           value
//         }
//       }
//     }
//   }
// }

// for (let item of country) {
//   console.log(item);
// }


//Generator (порционно выдаем i)

function *gen(num = 4) {
  for (let i = 0; i < num; i++) {
    yield i;
  }
}

const iter = gen(3);
// т.е. цикл не выполняется сразу же, а выполняется порционно пока вызываем функцию next()
// можно также выдавать ошибки при помощи оператора throw
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

//  for (let i of gen(4)) {
//    console.log(i);
//  }


// Версия Владилена
// можно также выдавать ошибки при помощи оператора throw только уже в функции нужно вылавливать их
// function *gen(num = 4) {
//   for (let i = 0; i < num; i++) {
//     try {
//       yield i
//     } catch (e) {
//       console.log('Error', e)
//     }
//   }
// }

// const iter = gen(3)
// console.log(iter.next())
// console.log(iter.throw('My Error'))
// console.log(iter.next())
// console.log(iter.next())