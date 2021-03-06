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
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Сумма свойств объекта - полный затуп, нужно объяснение
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