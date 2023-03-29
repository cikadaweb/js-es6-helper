class Person {

  type = 'human';

  constructor(name) {
    this.name = name
  }

  greet() {
    console.log(this.name + ' говорит привет!');
  }
}

// const max = new Person('Max');
// max.greet();

// console.log(max.type);
// console.log(max.__proto__ === Person.prototype);

// НАСЛЕДОВАНИЕ
class Programmer extends Person {
  constructor(name, job) {
    super(name)

    this._job = job;
  }

  // в классах также доступен функционал геттеров и сеттеров
  get job() {
    return this._job.toUpperCase();
  }

  // Зачем нужны вообще сеттеры? В них можно писать различную валидацию.
  set job(job) {
    if (job.length < 2) {
      throw new Error('Validation failed');
    } else {
      this._job = job;
    }
  }

  // перписали родительский метод
  greet() {
    super.greet();            
    console.log('Rewritten');
  }

//   //если хотим вызывать родителский метод 
//   greet() {
//     super.greet();          
//     console.log('Rewritten');
// }
  
}

const frontend = new Programmer('Max', 'Frontend');
console.log(frontend);
frontend.greet();
console.log(frontend.job);
frontend.job = 'Backend';
console.log(frontend.job);


// Static статические методы (позволяет напрямую обращаться к классу и вызывать его методы)


// вот так вы чтобы воспользоваться методом нужен объект класса
// class Util {
//   average(...args) {
//     return args.reduce((acc, i) => acc += i, 0) / args.length;
//   }
// }

// const util = new Util();
// console.log(util.average(1, 1, 2, 3, 5, 8, 13));



// а так не нужен
class Util {
  static average(...args) {
    return args.reduce((acc, i) => acc += i, 0) / args.length;
  }
}

const res = Util.average(1, 1, 2, 3, 5, 8, 13);
console.log(res);