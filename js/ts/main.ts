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

function highAndLow(str){
  function goodsort(a, b) {
    return a - b;
  }

  let arr = str.split(' ').map((value) => +value).sort(goodsort);
  console.log(arr);

  let first = arr.slice(-1);
  let last = arr.slice(0,1);

  return first.concat(last).join(' ');
}
console.log(highAndLow("1 2 3 4 5"));  // return "5 1"
console.log(highAndLow("1 2 -3 4 5")); // return "5 -3"
console.log(highAndLow("1 9 3 4 -5")); // return "9 -5"
console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
// console.log(highAndLow(prompt ('Введите несколько чисел через пробел')));