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