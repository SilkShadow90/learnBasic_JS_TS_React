// Напишите функцию filterRange(arr, a, b)
// которая принимает массив arr
// ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// function filterRange(arr: number[], a: number, b: number): number[] {
//   return arr.filter((value: number) => value >= a && value <= b);
// }

// const arr: number[] = [5, 3, 8, 1];

// const filtered: number[] = filterRange(arr, 1, 4);

// console.log(filtered); // 3,1 (совпадающие значения)

// console.log(arr); // 5,3,8,1 (без изменений)

// Фильтрация по диапазону "на месте"
// важность: 4
// Напишите функцию filterRangeInPlace(arr, a, b),
// которая принимает массив arr и удаляет из него все значения кроме тех
// которые находятся между a и b.
// То есть, проверка имеет вид a ≤ arr[i] ≤ b.

// Функция должна изменять принимаемый массив и ничего не возвращать.

// Например:

// function filterRangeInPlace(arr: number[], a: number, b: number): void {
//   arr.forEach((value: number, index: number) => {
//     if (!(value >= a && value <= b)) {
//       arr.splice(index, 1);
//     }
//   });
//   // arr.filter((value) => !(value >= a && value <= b));
// }

// const arr: number[] = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// console.log(arr); // [3, 1]

// Сортировать в порядке по убыванию
// важность: 4

// const arr: number[] = [5, 2, 1, -10, 8];

// arr.sort((a: number, b: number) => b - a);

// console.log(arr); // 8, 5, 2, 1, -10

// Скопировать и отсортировать массив
// важность: 5
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
// function copySorted(arr: string[]): string[] {
//   return arr.slice().sort();
// }

// const arr: string[] = ["HTML", "JavaScript", "CSS"];

// const sorted: string[] = copySorted(arr);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без изменений)

// // Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// // Задание состоит из двух частей.

// // Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2"
// // в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами)
// // и возвращает результат. Метод должен понимать плюс + и минус -.

// // Пример использования:
// interface ICalculator {
//   a: number;
//   b: number;
//   operator: string;
// }

// interface IMethods {
//   [key: string]: (a: number, b: number) => number;
// }

// function Calculator() {
//   this.methods = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b,
//   } as IMethods;

//   this.calculate = function(str: string) {
//     const [a, operator, b] = str.split(' ');

//     return this.methods[operator](+a, +b);
//   };
//   this.addMethod = function(name, func) {
//     this.methods[name] = func;
//   };
// }

// let calc = new Calculator();

// console.log(calc.calculate('3 + 7')); // 10
// // Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
// // Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// // Например, давайте добавим умножение , деление / и возведение в степень *:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// console.log(result); // 8
// // Для этой задачи не нужны скобки или сложные выражения.
// // Числа и оператор разделены ровно одним пробелом.
// // Не лишним будет добавить обработку ошибок.

// Трансформировать в массив имён
// важность: 5
// У вас есть массив объектов user, и в каждом из них есть user.name.
//  Напишите код, который преобразует их в массив имён.

// Например:
//
// const vasya = { name: 'Вася', age: 25 };
// const petya = { name: 'Петя', age: 30 };
// const masha = { name: 'Маша', age: 28 };

// const users = [vasya, petya, masha];

// const names = users.map((item) => item.name);

// console.log(names); // Вася, Петя, Маша

//
// важность: 5
// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

// Напишите код, который создаст ещё один массив объектов с параметрами
//  id и fullName, где fullName – состоит из name и surname.

// Например:
// interface IUser {
//     name: string;
//     surname: string;
//     id: number;
// }
// const vasya: IUser = { name: "Вася", surname: "Пупкин", id: 1 };
// const petya: IUser = { name: "Петя", surname: "Иванов", id: 2 };
// const masha: IUser = { name: "Маша", surname: "Петрова", id: 3 };

// const users: IUser[] = [vasya, petya, masha];

// const usersMapped = users.map((user) => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id,
// }));

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// console.log(usersMapped[1].id)// 1
// console.log(usersMapped[1].fullName)// Вася Пупкин

// // Итак, на самом деле вам нужно трансформировать один массив объектов в другой.
//  Попробуйте использовать =>. Это небольшая уловка.
// Отсортировать пользователей по возрасту
// важность: 5

// Напишите функцию sortByAge(users),
//  которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:
// interface IUser {
//   name: string;
//   age: number;
// }
// const vasya: IUser = { name: "Вася", age: 25 };
// const petya: IUser = { name: "Петя", age: 30 };
// const masha: IUser = { name: "Маша", age: 28 };

// function sortByAge(users: IUser[]): void {
//   users.sort((a, b) => a.age - b.age);
// }
// const arr: IUser[] = [vasya, petya, masha];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя
// Получить средний возраст
// важность: 4
// Напишите функцию getAverageAge(users),
//  которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// Например:
// Например:
// interface IUser {
//   name: string;
//   age: number;
// }

// function getAverageAge(users: IUser[]): number {
//   return users.reduce((acc: number, user: IUser) => acc + user.age, 0) / users.length;
// }

// const vasya: IUser = { name: "Вася", age: 25 };
// const petya: IUser = { name: "Петя", age: 30 };
// const masha: IUser = { name: "Маша", age: 29 };

// const arr: IUser[] = [vasya, petya, masha];

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
// Оставить уникальные элементы массива
// важность: 4
// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив,
//  содержащий только уникальные элементы arr.

// Например:

// function unique(arr: string[]): string[] {
//   return arr.reduce((acc: string[], item: string) => {
//     if (!acc.includes(item)) {
//       acc.push(item);
//     }
//     return acc;
//   }, []);
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// console.log(unique(strings)); // кришна, харе, :-O
// Ошибка создания экземпляра класса
// важность: 5
// В коде ниже класс Rabbit наследует Animal.

// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

// class Animal {

//   constructor(name) {
//     this.name = name;
//   }

// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name)
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// console.log(rabbit.name);


// class Clock {
//   readonly template: string;

//   constructor({ template }) {
//     this.template = template;
//   }

//   timer: number;

//   render() {
//     const date = new Date();

//     let hours = String(date.getHours());
//     if (hours.length < 2) {
//       hours = `0${hours}`;
//     }

//     let mins = String(date.getMinutes());
//     if (mins.length < 2) {
//       mins = `0${mins}`;
//     }

//     let secs = String(date.getSeconds());
//     if (secs.length < 2) {
//       secs = `0${secs}`;
//     }

//     const output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(this.render.bind(this), 1000);
//   }
// }
// class ExtendedClock extends Clock {
//   readonly precision: number;

//   constructor({ template, precision = 1000 }) {
//     super({ template })
//     this.precision = precision;
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(this.render.bind(this), this.precision);
//   }
// }

// const clock = new ExtendedClock({ template: 'h:m:s', precision: undefined });
// clock.start();
// Создайте новый класс ExtendedClock, который будет наследоваться от Clock и
//  добавьте параметр precision – количество миллисекунд между «тиками».
//  Установите значение в 1000 (1 секунда) по умолчанию.

// Сохраните ваш код в файл extended-clock.js
// Не изменяйте класс clock.js. Расширьте его.