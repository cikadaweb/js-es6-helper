// по сути это класс, позволяющий добавлять ловушки на любые объекты

const validator = {
  get(target, prop) {
    return prop in target ? target[prop] : `Поля ${prop} в объекте нет`;
  },

  set(target, prop, value) {
    if (value.length > 2) {
      Reflect.set(target, prop, value);
    } else {
      console.log(
        "Длина должна быть больше 2х символов. Сейчас " + value.length
      );
    }
  },
};

const form = {
  login: "tester",
  password: "12345",
};

const formProxy = new Proxy(form, validator);

// console.log(formProxy.login);
// console.log(formProxy.password);
// console.log(formProxy["username"]);

// formProxy.password = "12";
// console.log(formProxy.password);

function log(message) {
  console.log("[Log]: ", message);
}

const proxy = new Proxy(log, {
  apply(target, thisArg, argArray) {
    if (argArray.length === 1) {
      Reflect.apply(target, thisArg, argArray);
    } else {
      console.log("Количество аргументов не совпадает!");
    }
  },
});

proxy("Custom message");
proxy();

// с Прокси можно защищать данные и защищать собственный функционал
