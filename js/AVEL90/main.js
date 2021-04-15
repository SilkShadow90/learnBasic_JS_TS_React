// alert('Я JavaScript');

// let admin ;
// let name ;
// name = 'Джон'
// admin = name;

// alert (admin)

// let planetName = 'Земля';
// const userName = 'Авель';
// alert(planetName);
// alert(userName);

// const planetName = 'wqewq';

// const planet = {
//   name: 'qwe',
//   size: 3243,
//   getSize: () => this.size,
// };

// const name = prompt('Как тебя зовут?');

// let a;

// let b = alert('wqe');

// alert(name);
// function getSum(a, b) {
//   if (typeof a === 'string') {
//     return 'Хуйня';
//   }

//   return a + b;

//   // fsdjkfhsdkfhe
// }

// const summaBabla = getSum(+name, 200);

// alert(summaBabla);

// let a = 1, b = 1;

// let c = ++a;
// let d = b++;

// a = 1, правильно 2
// b = 1, правильно 2
// c = 2
// d = 1

// let a = 2
// let x = 1 + (a *= 2) // x = 5

// "" + 1 + 0 // 1 , правильно "10"
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // NaN , правильно "9px"
// "$" + 4 + 5 // NaN , , правильно "$45"
// "4" - 2 // 2
// "4px" - 2 // NaN
// 7 / 0 // NaN , Infinity
// "  -9  " + 5 // -4 , правильно "  -9  5"
// "  -9  " - 5 // -14
// null + 1 //  1
// undefined + 1 // NaN
// " \t \n" - 2 // NaN , правильно -2

// let a = promt('первое число');
// let b = promt('второе число');

// alert(+a + +b);

// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // не понимаю, правильно false
// null === +"\n0\n" // не понимаю, правильно false

// if ("0") {
//   alert( 'Привет' ); // нет, правильно да, не увидел что это строка
// }

// let languagename = prompt('Какое «официальное» название JavaScript?');

// if (languagename == 'ECMAScript) {
//   alert('Верно');
// } else {
//   alert('Не знаете? ECMAScript!');
// }

// let number = prompt('Введите число');

// if (number > 0) {
//   number = '1';
// } else if (number < 0) {
//   number = '-1';
// } else if (number == 0) {
//   number = '0';
// }
// alert(number);

// let result = a + b < 4 ? 'Мало' : 'Много';

// let login = prompt('Введите логин');

// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//    '';

//   alert( message ); что ему не нравится???
// Почему после решения проблемы, код перестаёт работать???

// alert( null || 2 || undefined ); // 2

// alert( alert(1) || 2 || alert(3) ); // 1, правильно сначала 1, затем 2.

// alert( 1 && null && 2 ); // null

// alert( alert(1) && alert(2) ); // undefined, правильно сначала 1, затем undefined

// alert( null || 2 && 3 || 4 ); // сначала проверит 2 && 3, получит 3, далее null || 3 || 4, выведет null, правильно 3

// if (age >= 14 && age <= 90)

// if (!(age >= 14) && !(age <= 90))

// if (age < 14 || age > 90)

// let age = prompt('Введите число');

// if (age >= 14 && age <= 90) {
//  age = 'Правильно';
// } else if (age <= 14 || age >= 90) {
//  age = 'Неправильно!';
// }
// alert(age);

// const user = {
//   name: 'Avel',
//   age: 30,
//   getAge() {
//     return this.age;
//   },
// };
// const age = user.getAge();

// alert(age);

// const user = {
//   name: 'Avel',
//   age: 30,
//   getAge() {
//     return this.age;
//   },
// };
// const age = {
//   name: 'Misha',
//   age: 26,
//   getAge() {
//     return this.age;
//   },
// };

// const login =  ('Кто там?');
// const admin = 'admin';
// const wrongPass = 'Неверный пароль';
// const cancel = 'Отменено';
// const wrongLogin = 'Я вас незнаю';
// const veryPass = 'Я Главный';
// const hello = 'Здравствуйте';

// if (login === admin) {
//   const password = prompt('Пароль?');
//   if
// } else if (login === null) {
//   alert (cansel);
// } else {
//   alert
// }

// for (let i = 2; i <= 10; i++) {
//   // if (i % 2 === 0) {
//   // alert(i);
//   // }
//   if (i % 2 !== 0) {
//     continue;
//    }
//   alert(i);
// };

// for (let i = 0; i < 3; i++) {
//   alert(`number ${i}!`);
// }

// let i = 0;

// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// for (let i = 2; i < number; i++) {
//   let isSimple = true;
//   for (let n = 2; n < i; n++) {
//     if (i % n === 0) {
//       isSimple = false;
//     }
//   }
//   if (isSimple) {
//     array.push(i);
//   }
// }

// const login = prompt('Кто там?');
// const admin = 'admin';
// const wrongPass = 'Неверный пароль';
// const cancel = 'Отменено';
// const wrongLogin = 'Я вас не знаю';
// const veryPass = 'Я Главный';
// const hello = 'Здравствуйте';
// const authentification = 'Пароль?';

// if (login === admin) {
// const password = prompt(authentification);
// if (password === veryPass) {
// alert(hello);
// } else if (password === null) {
// alert(cancel);
// } else {
// alert(wrongPass);
// }
// } else if (login === null) {
// alert(cancel);
// } else {
// alert(wrongLogin);
// }
//
// let number;

// while (true) {
// if (number === null || number >= 100) break;
// number = prompt('ввести число, большее 100');
// }

// let num;

// do {
// num = prompt("Введите число, большее 100?", 0);
// } while (num <= 100 && num);

// const number = prompt('Введите число');

// console.log(getSimplelist(number));

/* function getSimplelist(a) {
  const array = [];
  for (let i = 2; i < a; i++) {
    if (getIsSimple(i)) {
      array.push(i);
    }
  }
  return array;
} 

function getIsSimple(a) {
  let isSimple = true;
  for (let n = 2; n < a; n++) {
    if (a % n === 0) {
      isSimple = false;
    }
  }

  return isSimple;
}
*/

// const browser = prompt("Какой браузер вы используете?");
// const browsersList = ['Chrome', 'Firefox', 'Safari', 'Opera'];
// if (browser === 'Edge') {
//   alert("You've got the Edge!");
// } else if (browsersList.includes(browser)) {
//   alert('Okay we support these browsers too');
// } else {
//   alert('We hope that this page looks ok!');
// }

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

// function checkAge(age) {
//   // return age > 18 ? true : confirm('Родители разрешили?');
//   return age > 18 || confirm('Родители разрешили?');
// }

// function min(a, b) {
// if (a > b) {
//   return b;
// }

// return a;
// return a < b ? a : b;
// }
// alert(min(3, 3));

// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// alert(pow(3, 2)); //= 3 * 3 = 9
// alert(pow(3, 3)); //= 3 * 3 * 3 = 27
// alert(pow(5, 0)); //= 1 * 1 * ...* 1 = 1

// function pow(x, n) {
//   if (n === 0) {
//     return 1;
//   }
//   if (n === 1) {
//     return x;
//   }
//   return x * pow(x, n - 1);
// }

// alert(pow(3, 0)); //= 3 * 3 = 9
// alert(pow(3, 3)); //= 3 * 3 * 3 = 27
// alert(pow(2, 77)); //= 1 * 1 * ...* 1 = 1

// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// // alert(fib(3)); // 2
// // alert(fib(7)); // 13
// alert(fib(77)); // вычисляется очень долго

// const user = {};

// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// const mainNode = document.getElementById('main');

// const serverList = [1, 2, 3, 4, 5];

// for (let value of serverList) {
//   const spanNode = document.createElement('div');

//   spanNode.innerText = value;

//   mainNode.append(spanNode);
// }

// function qwe(value) {
//   const spanNode = document.createElement('div');

//   spanNode.innerText = value;

//   mainNode.append(spanNode);
// }

// serverList.forEach(qwe);

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

//   // Object.keys(obj) = key[]] | Object.values(obj) - value[]] | Object.entries(obj) = [key, value][]

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

// function isEmpty(obj) {
// for (const key in obj) {
//   return false;
//   // }
//   // return true;
//   return Boolean(Object.keys(obj).length);
// }
// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
//   Vasa: 35,
// };

// let sum = 0;
// for (const key in salaries) {
//   sum += salaries[key];
// }
// (sum);
// Object.values(salaries)
//   .reduce((acc, value) => acc + value, 0);

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// function multiplyNumeric(menu) {
//   for (const key in menu) {
//     if (typeof menu[key] === 'number') {
//       menu[key] *= 2;
//     }
//   }
// }
// multiplyNumeric(menu);
// multiplyNumeric(menu);
// multiplyNumeric(menu);
// multiplyNumeric(menu);
// multiplyNumeric(menu);
// console.log(menu);

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

// const ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep() {
//     // показывает текущую ступеньку
//     alert(this.step);
//     return this;
//   }
// };

// ladder.up().up().up().up().down().showStep(); // 3
// // ladder.up().up().up().up().down().showStep(); // 1
// // ladder.up().up().up().up().down().showStep(); // 1
// // ladder.up().up().up().up().down().showStep(); // 1

// const car = {
//   distance: 100,
// };
// function A() {
//   return car;
// };
// function B() {
//   return car;
// };

// let a = new A;
// let b = new B;

// alert( a == b ); // true

// function Calculator() {
//   this.read = function() {
//     this.a = +prompt('Введите первое число');
//     this.b = +prompt('Введите второе число');
//   };
//   this.sum = function() {
//     return this.a + this.b;
//   };
//     this.mul = function(){
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );

// let calculator2 = new Calculator();
// calculator2.read();

// alert( "Sum=" + calculator2.sum() );
// alert( "Mul=" + calculator2.mul() );

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function() {
//     this.value += +prompt('a?');
//   };
// }
// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// function getNumber() {
// const number = prompt();

// if (+number || number === null) {
//   return number;
// }
//
// return getNumber();

// for(;;) {}
// while (true) {
//   const number = prompt();
//
//   if (+number || number === null) {
//     return number;
//   }
// }
// }

// getNumber();

// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

// function checkSpam(str) {
//   let str1 = str.toLowerCase();
//   let str2 = str.toUpperCase();
//   return str1.includes('viagra') || str2.includes('XXX');
// }
// console.log(checkSpam('buy ViAgRA now') == true);
// console.log(checkSpam('free xxxxx') == true);
// console.log(checkSpam('innocent rabbit') == false);

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// function ucFirst(str) {
//   if(!str) return str;
//   return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst('вася') == 'Вася');
// console.log(ucFirst('петя') == 'Петя');
// console.log(ucFirst('коля') == 'Коля');

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength,
// заменяет конец str на "…", так, чтобы её длина стала равна maxlength.

// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// function truncate(str, maxlength) {
//   let str1 = str
//   if (str.length <= maxlength) {
//     return str1;
//   }
//   str1 = str1.slice(0,maxlength);
//   return str1 + '...';
// }

// console.log (truncate('Вот, что мне хотелось бы сказать на эту тему:', 20))
// console.log (truncate('Пидарасы:', 2))
// console.log (truncate('Всем привет!', 20))

function extractCurrencyValue(str) {
  str1 = str;
  return +str1.slice(1);
}
alert(extractCurrencyValue('$120') === 120);
