// function copySorted<T>(arr: T[]): T[] {
//   return arr.slice().sort();
// }

// const arr: string[] = ['HTML', 'JavaScript', 'CSS'];
// const arrN: number[] = [1, 2, -1];

// const sorted: string[] = copySorted<string>(arr);
// const sortedN: number[] = copySorted<number>(arrN);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без изменений)

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

// Задание состоит из двух частей.

// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2"
// в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами)
// и возвращает результат. Метод должен понимать плюс + и минус -.

// Пример использования:
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

// // Например, давайте добавим умножение *, деление / и возведение в степень **:

// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);

// let result = powerCalc.calculate("2 ** 3");
// console.log(result); // 8
// // Для этой задачи не нужны скобки или сложные выражения.
// // Числа и оператор разделены ровно одним пробелом.
// // Не лишним будет добавить обработку ошибок.

// interface AbstractFactory {
//  createProductA(): AbstractProductA;
//  createProductB(): AbstractProductB;
// }

// class ConcreteFactory1 implements AbstractFactory {
//  public createProductA(): AbstractProductA {
//    return new ConcreteProductA1();
//  }
//  public createProductB(): AbstractProductB {
//    return new ConcreteProductB1();
//  }
// }

// class ConcreteFactory2 implements AbstractFactory {
//  public createProductA(): AbstractProductA {
//    return new ConcreteProductA2();
//  }
//  public createProductB(): AbstractProductB {
//    return new ConcreteProductB2();
//  }
// }

// interface AbstractProductA {
//  usefulFunctionA(): string;
// }

// class ConcreteProductA1 implements AbstractProductA {
//  public usefulFunctionA(): string {
//    return 'The result of the product A1.';
//  }
// }

// class ConcreteProductA2 implements AbstractProductA {
//  public usefulFunctionA(): string {
//    return 'The result of the product A2.';
//  }
// }

// interface AbstractProductB {
//  usefulFunctionB(): string;
//  anotherUsefulFunctionB(collaborator: AbstractProductA): string;
// }

// class ConcreteProductB1 implements AbstractProductB {
//  public usefulFunctionB(): string {
//    return 'The result of the product B1.';
//  }

//  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
//    const result = collaborator.usefulFunctionA();
//    return The result of the B1 collaborating with the (${result});
//  }
// }

// class ConcreteProductB2 implements AbstractProductB {
//  public usefulFunctionB(): string {
//    return 'The result of the product B2.';
//  }

//  public anotherUsefulFunctionB(collaborator: AbstractProductA): string {
//    const result = collaborator.usefulFunctionA();
//    return The result of the B2 collaborating with the (${result});
//  }
// }

// function clientCode(factory: AbstractFactory) {
//  const productA = factory.createProductA();
//  const productB = factory.createProductB();

//  console.log(productB.usefulFunctionB());
//  console.log(productB.anotherUsefulFunctionB(productA));
// }

// console.log('Client: Testing client code with the first factory type...');
// clientCode(new ConcreteFactory1());

// console.log('');

// console.log('Client: Testing the same client code with the second factory type...');
// clientCode(new ConcreteFactory2())

// Напишите функцию, которая принимает строку из чисел и возвращает строку с максимальным и минимальным числами из начальной строки

// function highAndLow(str){
//   function goodsort(a, b) {
//     return a - b;
//   }

//   let arr = str.split(' ').map((value) => +value).sort(goodsort);
//   console.log(arr);

//   let first = arr.slice(-1);
//   let last = arr.slice(0,1);

//   return first.concat(last).join(' ');
// }
// console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
// console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
// console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
// // console.log(highAndLow(prompt ('Введите несколько чисел через пробел')));

// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

interface IUser {
  name: string;
  age: number;
}

// let vasya: IUser = { name: "Вася", age: 25 };
// let petya: IUser = { name: "Петя", age: 30 };
// let masha: IUser = { name: "Маша", age: 28 };

// let arr: IUser[] = [ vasya, petya, masha ];

// function sortByAge(arr: IUser[]): IUser[] {
//   return arr.sort((a, b) => a.age - b.age);
// };

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя

// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.

// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

// let vasya: IUser = { name: "Вася", age: 25 };
// let petya: IUser = { name: "Петя", age: 30 };
// let masha: IUser = { name: "Маша", age: 29 };

// let arr: IUser[] = [ vasya, petya, masha ];

// function getAverageAge(arr: IUser[]): number {
//   return arr.reduce((acc, user) => acc + user.age, 0) / arr.length;
// }

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

// Пусть arr – массив строк.

// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.

// function unique(arr: string[]): string[] {
//   return arr.reduce(
//     (acc: Array<string>, value: string) => {
//       if (!acc.includes(value)) {
//         acc.push(value);
//       }

//       return acc;
//     },
//     [],
//   );
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// console.log( unique(strings) ); // кришна, харе, :-O

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.

// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

// let arr = [1, 2, 3];

// function shuffle(arr: any[]): void {
//   arr.sort(() => Math.random() - 0.5);
// }

// shuffle(arr);
// console.log(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// // Все последовательности элементов должны иметь одинаковую вероятность.
// // Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

// В коде ниже класс Rabbit наследует Animal.

// К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.

// class Animal {

//   constructor(name) {
//     this.name = name;
//   }

// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// alert(rabbit.name);

// Класс Clock написан в функциональном стиле. Перепишите его, используя современный синтаксис классов.

// class Clock {

//   readonly template: string;

//   constructor({ template }) {
//     this.template = template;
//   }

//   timer: number;

//   render() {
//     let date = new Date();

//     let hours = String(date.getHours());
//     if (hours.length < 2) {
//       hours = '0' + hours;
//     }

//     let mins = String(date.getMinutes());
//     if (mins.length < 2) {
//       mins = '0' + mins;
//     }

//     let secs = String(date.getSeconds());
//     if (secs.length < 2) {
//       secs = '0' + secs;
//     }

//     let output = this.template
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

// class Rabbit extends Object {
//   constructor(name) {
//     super();
//     super.name = name;
//   }
// }

// let rabbit = new Rabbit('Кроль');

// console.log(rabbit.hasOwnProperty('name')); // Ошибка

// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

// Сделайте три варианта решения:

// С использованием цикла.
// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// С использованием формулы арифметической прогрессии.
// Пример работы вашей функции:

// function sumTo(n) {
//   let sum = n;
//   for(let i = 0;i < n; i++) {
//     sum += i;  
//   }
//   return sum;
//  };

// function sumTo(n) {
//   let sum = n
//   if (n == 1) {
//     return sum;
//   } 
//   return n + sumTo(n - 1);
// };

// function sumTo(n) {
//   let arr = new Array(n).fill(1).reduce((acc, _, index) => acc + index, n);
//   return arr;
// }
 
// console.log(sumTo(100)); // 5050

// Напишите функцию, которая найдет все наборы анаграмм в строке
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке (рост-сорт-торс).

// результат - [«мир-рим", "карп-парк", "кума-мука", "куст-стук", "адрес-среда", "рост-сорт-трос"]

const str = 'адрес карп кума куст мир мука парк рим среда стук рост сорт трос';

function anagram(str) {
  const arr = str.slice()
  .split(' ')
  .map((item) => item.split(''));

  arr.reduce((acc) => {

  })
  
  return arr;
} 
  
console.log(anagram(str));
