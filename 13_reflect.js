class Student {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

const student = new Student("Adel"); // обычно как делали

class ProtoStudent {
  university = "Oxford";
}

const student2 = Reflect.construct(Student, ["Rail"]);
Reflect.apply(student2.greet, { name: "Tester" }, []);
console.log(Reflect.ownKeys(student2));

Reflect.preventExtensions(student2); // блокируем модификацию (как снизу)
student2.age = 25;

console.log(Reflect.isExtensible(student2));

console.log(student2);

// const student2 = Reflect.construct(Student, ["Rail"], ProtoStudent);
// console.log(student2.__proto === Student.prototype);
