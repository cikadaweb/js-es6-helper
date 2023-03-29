// function sum(a, b) {
//   return a + b
// }

// function cube(a) {
//   return a ** 3
// }

// переписывам на стрелчные

// const sum = (a, b) => {
//   return a + b
// }

// const cube = a => a ** 3

// console.log(sum(41, 1));
// console.log(cube(2));

//еще пример

// setTimeout(function() {
//   console.log('After 1 second');
// })

// setTimeout(() => {
//   console.log('After 1 second');
// })

// setTimeout(() => console.log('After 1 second'))

//Context особенность связанная с контекстом

function log() {
  console.log(this);
}

const arrowLog = () => console.log(this);

const person = {
  name: 'Adel',
  age: 20,
  log: log,
  arrowLog: arrowLog,
  delayLog: function() {

    // ES5
    // const self = this;     
    // setTimeout(function() {
    //   console.log(self.name + ' ' + self.age);
    // }, 500) 

    // ES6
    // вот тут стрелочные функции не создают контекста поэтому позволяют использовать this
    setTimeout(() => {
      console.log(this.name + ' ' + this.age);
    }, 500) 
  }
}

person.log();
person.arrowLog();  // объект global, а в брузере объект window
person.delayLog();