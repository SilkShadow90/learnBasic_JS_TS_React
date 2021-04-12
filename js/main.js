// "use strict";
// a = 'weq';
// b = 'weq';

// var a = null;

//   let b = 'hello';
//  function name () {
//    b = 'wqe';
//  }
//  const c = 'hello';

//  name();

// c = 'qwe';
// alert(a)
// console.log(a, 'a');
// console.warn(a, 'a');
// console.error(b, 'b');
// console.log(c, 'c');

// b = 123;

// a = 123;

// 'qwe' 123 true false

// const q = 1 + "2";
// const bool = true;
// const nil = null;
// const und = undefined;
// const qwe = Symbol('qwe');

// let int1 = 1;
// console.log('int1', int1)

// let int2 = int1;
// console.log('int2', int2)

// int1 = 2;
// console.log('int1', int1)
// console.log('int2', int2)

// const object1 = {
//   int: 1,
// }
// console.log('object1', object1.int)

// const object2 = { ...object1 };
// const object3 = object1;
// console.log('object2', object2.int)

// object1.int = 2;

// console.log('object1', object1.int)
// console.log('object2', object2.int)
// console.log('object3', object3)

// console.log(qwe1.qwe1)
// console.log(qwe1.qwe1 == qwe1.qwe)
// console.log(qwe1.qwe1 === qwe1.qwe)

// class Animal {
//   constructor(props) {
//     this.age = props.age;
//     this.name = props.name;
//   }
// }
//
// const qwerty = new Animal({ name: 'qwe', age: 12 })
//
// console.log(qwerty);
// console.log(qwerty.entries());
// let i = 0

// for (i; i <= 10; ++i) {
//   // console.log(i);
// }

// const bool1 = true;
// const bool2 = false;

// console.log(!bool1);
// console.log(bool1 || object1);

// console.log(Boolean(Number("sfdghh")));
// console.log('q', q); w
// console.log('q', q);

// Boolean(x) = x = false если 0 -0 '' null undefined NaN

// let a2;
// let a1 = (a2 = 1 + 2, 3 + 4);
// console.log('a1', a1);
// console.log('a2', a2);
// console.log(null + 1);
// const isExistUser = true;

// if (isExistUser) {
//   console.log( "Правильно!" );
// }

// const qwe2 = isExistUser;

// if (!isExistUser) {
//   console.log( "Правильно!" );
// } else {
//   console.log( "Not Правильно!" );
// }

// const age = 2;
// let message;
// let message;

// if (age < 3) {
//   message = 'Здравствуй, малыш!';
// } else if (age < 18) {
//   message = 'Привет!';
// } else if (age < 100) {
//   message = 'Здравствуйте!';
// } else {
//   message = 'Какой необычный возраст!';
// }

// switch (true) {
//   case age < 3:
//     message = 'Здравствуй, малыш!';
//     break;
//   case age < 18:
//     message = 'Привет!';
//     break;
//   case age < 100:
//     message = 'Здравствуйте!';
//     break;
//   default:
//     message = 'Какой необычный возраст!';
// }

// console.log(message)
// console.log(message)

// let company = prompt('Какая компания создала JavaScript?', '');
//
// if (company == 'Netscape') {
//   alert('Верно!');
// } else {
//   alert('Неправильно.');
// }
//
// alert(company == 'Netscape' ? 'Верно!' : 'Неправильно.');

// const message1 = "Какое «официальное» название JavaScript?" // сообщение для выпадающего алерта
// const company1 = prompt(message1, '') // введенное сообщение сохраняем в компанию
// const ECMAScript = "ECMAScript" // верное название для сравнения
//
// if (company1 === ECMAScript ) {
//   alert('Правильно!')
// }// сравниваем название
// else {
//   alert('Не знаете? ECMAScript!')
// }

// const message1 = "Введите число" // сообщение для выпадающего алерта
// const value = prompt(message1, '') // введенное сообщение сохраняем в компанию

// if (value > 0 ) {
//   alert('1')
// } else if (value < 0) {
//   alert('-1')
// }else {
//   alert("0")
// }

// let result = (a + b < 4) ? 'Мало' : 'Много';

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// result = (a + b < 4) ? 'Мало' : 'Много'

// let car = {
//   color: 'green',
//   maxSpeed: 250,
//   audio:{
//     brand: 'sony',
//     speakers: 12
//   }
// };
//  car['color'] = 'red';
//  console.log (typeof car.audio);
//  console.log (car.audio);
// const qwe1 = true
// const qwe2 = false
// const qwe3 = true

// if (qwe1 || qwe2) {
//   alert('true ||')
// }
// if (qwe1 && qwe2) {
//   alert('true &&')
// }
// if (!qwe2) {
//   alert('true !')
// }

// let hour = 20;

// if (hour < 10 || hour > 18) {
//   alert('Офис закрыт.');
// }
// if (hour >= 10 && hour < 18) {
//     alert( 'Офис открыт.' );
// } else {
//   alert('Офис закрыт')
// }

// alert( 1 || 0 ); // 1
// alert( true || 'no matter what' ); // true
//
// alert( null || 1 ); // 1 (первое истинное значение)
// alert( null || 0 || 1 ); // 1 (первое истинное значение)
// alert( undefined || null || 0 ); // 0 (поскольку все ложно, возвращается последнее значение)
//

// alert( alert(1) && alert(2) ); // alert(1)
// alert( undefined && alert(2) );
// alert(undefined);

//
//
// const age = 200;
//
// const successRange = age >= 14 && age <= 90;
// const badRange = age < 14 || age > 90;
//
// if (successRange) {
//   alert(`Ваш возраст : ${age}`);
//
//   // alert('Ваш возраст : ' + age);
// }
// if (badRange) {
//   alert(`Ваш возраст : ${age}`)
// }
// !
// true != range
// true != результат age >= 14 && age <= 90

// if (!successRange) {
//   alert(`Ваш возраст : ${age}`);
// }

// function getNumber(number) {
//   return number * number;
// }

// alert(getNumber(2))
//
// const loginName = prompt('кто там?', '');
// const admin = 'admin';
// const verifyPass = '1234';
// const cancel = 'отменено';
// const notAdmin = 'Я Вас не знаю';
// const hello = 'Hello';
// const noPass = 'неверный пароль';

// // alert(prompt("кто там?"))
// if (loginName === admin) {
//   const password = prompt('Пароль?', '');

//   if (verifyPass === password) {
//     alert(hello);
//   } else if (password) {
//     alert(noPass);
//   } else {
//     alert(cancel);
//   }
// } else if (loginName) {
//   alert(notAdmin);
// } else {
//   alert(cancel);
// }
// let name = prompt("Ваше имя?", "");
// confirm(name);

// const a = 2 + 3;

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }

// function имя(параметры) {
// ...тело...
// function showMessage() {
//     confirm( 'Всем привет!' );
//   }
//   showMessage();

// let userName = "жопа";

// function showMessage() {
//   let message = "Привет, " + userName;
//   alert(message);
// }   не работающее дерьмо
// let user = {
//     name: "john",
//     age: 30,
// }
// user.isAdmin = true;
// alert( user.name );
// const user = {
//   name: 'john',
// };
// user.name = 'pete';
// alert(user.name);
// const user = { name: 'John', age: 30 };
// const name = {};
// name.user = 'john';
// name.surName = 'Smith';    \\выполненное задание , через попу
// name.user = 'Pete';
// delete user.name;
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Сумма свойств объекта - полный затуп, нужно объяснение
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!важность: 5
// объединение объектов нужно лти это ваще ?
//
//
// const login = prompt('Кто там?');
// const admin = 'admin';
// const wrongPass = 'Неверный пароль';
// const cancel = 'Отменено';
// const wrongLogin = 'Я вас не знаю';
// const veryPass = 'Я Главный';
// const hello = 'Здравствуйте';
// const authentification = 'Пароль?';

// if (login === admin) {
//   const password = prompt(authentification);
//   if (password === veryPass) {
//     alert(hello);
//   } else if (password === null) {
//     alert(cancel);
//   } else {
//     alert(wrongPass);
//   }
// } else if (login === null) {
//   alert(cancel);
// } else {
//   alert(wrongLogin);
// }     СААААААААААААААААААААААААМ ААААААААААААААААААААААААААААА
//
//
// let number;

// while (true) {
//   if (number === null || number >= 100) break;
//   number = prompt('ввести число, большее 100');
// }

// let num;

// do {
//   num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);
// const number = prompt('Введите число');

// console.log(getSimplelist(number));

// function getSimplelist(a) {
//   const array = [];
//   for (let i = 2; i < a; i++) {
//     if (getIsSimple(i)) {
//       array.push(i);
//     }
//   }
//   return array;
// }

// function getIsSimple(a) {
//   let isSimple = true;
//   for (let n = 2; n < a; n++) {
//     if (a % n === 0) {
//       isSimple = false;
//     }
//   }

//   return isSimple;
// }
// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }
// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//   case 0:
//     alert('Вы ввели число 0');
//     break;
//   case 1:
//     alert('Вы ввели число 1');
//     break;
//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;
//   default:
// }

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }
// условие истина ложь
// function min(a, b) {// if (a > b) {//   return b;
// }

// return a;
// return a < b ? a : b;
// }
// alert(min(3, 3));
// function checkAge(age) {
//   // return age > 18 ? true : confirm('Родители разрешили?');
//   return age > 18 || confirm('Родители разрешили?');
// }
// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// alert(fib(77)); // вычисляется очень долго
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// const carA = {
//   construct: {
//     isMechanic: true,
//     maxSpeed: 200,
//   },
//   color: 'red',
// };

// const carB = {
//   construct: {
//     isMechanic: true,
//     maxSpeed: 200,
//   },
//   color: 'red',
//   radio: true,
// };

// function isEqualCar(car1, car2) {
//   // превращение обекта в массив
//   const keysList = Object.keys(car1);

// Object.keys(obj) = key[]] | Object.values(obj) - value[]] | Object.entries(obj) = [key, value][]

//   const isLenghtEqual = keysList.length === Object.keys(car2).length;

//   if (!isLenghtEqual) {
//     return false;
//   }

//   return keysList.every((key) => {
//     // car1[key] - value
//     // если значение ключа является объектом то уходим в рекурсию
//     if (typeof car1[key] === 'object') {
//       return isEqualCar(car1[key], car2[key]);
//     }

//     const isEqual = car1[key] === car2[key];

//     if (!isEqual) {
//       console.log(key);
//     }

//     return isEqual;
//   });
// }

// console.log(isEqualCar(carA, carB));
// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.
// const user = {}
// user.name = 'john';
// user.surname = 'smith';
// user.name = 'pete';
// delete user.name;
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// Должно работать так:

// function isEmpty(obj) {
//   // for (const key in obj) {
//   //   return false;
//   // }
//   // return true;
//   return Boolean(Object.keys(obj).length);
// }
// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false
// до вызова функции
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// function multiplyNumeric(menu) {
//   Object.entries(menu).forEach(([key, value]) => {
//     if (typeof value === 'number') {
//       menu[key] *= 2;
//     }
//   });
//   // for (const key in menu) {
//   //   if (typeof menu[key] === 'number') {
//   //     menu[key] *= 2;
//   //   }
//   // }
// }
// multiplyNumeric(menu);
// multiplyNumeric(menu);
// multiplyNumeric(menu);
// multiplyNumeric(menu);
// multiplyNumeric(menu);
// console.log(menu);

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Создайте объект calculator (калькулятор) с тремя методами:

// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.
// const calculator = {
//   read() {
//     this.a = +prompt('Введите первое число');
//     this.b = +prompt('Введите второе число');
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());
// Напишите функцию-конструктор Accumulator(startingValue).

// Объект, который она создаёт, должен уметь следующее:

// Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
// Метод read() использует prompt для получения числа и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(),
//  с учётом начального значения startingValue.

// Ниже вы можете посмотреть работу кода:
// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.value += +prompt('a?');
//   };
// }
// const accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// // alert(accumulator.value); // выведет сумму этих значений
// // Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// /**
//  * @name ucFirst
//  * @param str {string}
//  * @return {string}
//  */
// // function ucFirst(str) {
// //   return str[0].toUpperCase() + str.slice(1);
// // }

// // console.log(ucFirst("вася") === "Вася")
// // Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// // Функция должна быть нечувствительна к регистру:
// /**
//  * @name checkSpam
//  * @param str {string}
//  * @return {boolean}
//  */
// // function checkSpam(str) {
// //   const spam = str.toUpperCase();
// //   return spam.includes('VIAGRA') || spam.includes('XXX');
// // }

// // console.log(checkSpam('buy ViAgRA now') == true);
// // console.log(checkSpam('free xxxxx') == true);
// // console.log(checkSpam("innocent rabbit") == false);



// // Создайте функцию truncate(str, maxlength),
// //  которая проверяет длину строки str и,
// //   если она превосходит maxlength,
// //    заменяет конец str на "…", так,
// //     чтобы её длина стала равна maxlength.

// // // Результатом функции должна быть та же строка,
// //  если усечение не требуется, либо, если необходимо,
// //   усечённая строка.
// /**
//  * @name truncate
//  * @param str {string}
//  * @param maxlength {number}
//  * @return {string}
//  */
// // function truncate(str, maxlength) {
// //   // if (str.length > maxlength) {
// //   //   return str.slice(0, maxlength-3)+'…';
// //   // }
// //   // return str
// //   return str.length > maxlength ? str.slice(0, maxlength-3)+'…' : str;
// // }


// // console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))

// // console.log(truncate("Всем привет!", 30))
// // Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.

// // Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// // Например:
// /**
// //  * @name extractCurrencyValue
// //  * @description Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// //  *  Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// //  * @param str {string}
// //  * @return {number}
// //  */

// // function extractCurrencyValue(str) {
// //   return Number(str.slice(1));
// // }
// // alert( extractCurrencyValue('$120') === 120 ); // true

// //
// //
// //
// //
// //

// // Напишите функцию sumInput(), которая:

// // Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// // Заканчивает запрашивать значения, когда пользователь введёт не числовое значение,
// //  пустую строку или нажмёт «Отмена».
// // Подсчитывает и возвращает сумму элементов массива.
// // P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
// /**
//  * @name sumInput
//  * @return {number}
//  */
// function sumInput() {
//   const array = [];

//   while (true) {
//     const str = prompt('Введите значение');
//     if (str === null || str === '' || isNaN(+str)) {
//       break;
//     }
//     array.push(+str);
//   }

//   function sum(a, b) {
//     return a + b;
//   }

//   return array.reduce(sum, 0);
// }

// alert(sumInput());
