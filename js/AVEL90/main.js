/*
  alert('Я JavaScript');

  let admin ;
  let name ;
  name = 'Джон'
  admin = name;

  alert (admin)

  let planetName = 'Земля';
  const userName = 'Авель';

  alert(planetName);
  alert(userName);


const planetName = 'wqewq';

const planet = {
  name: 'qwe',
  size: 3243,
  getSize: () => this.size,
};

const name = prompt('Как тебя зовут?');

// let a;

// let b = alert('wqe');

// // alert(name);
function getSum(a, b) {
  if (typeof a === 'string') {
    return 'Хуйня';
  }

  return a + b;

  // fsdjkfhsdkfhe
}

const summaBabla = getSum(+name, 200);

alert(summaBabla);

let a = 1, b = 1;

let c = ++a;
let d = b++;

a = 1, правильно 2
b = 1, правильно 2
c = 2
d = 1 

let a = 2
let x = 1 + (a *= 2) // x = 5

"" + 1 + 0 // 1 , правильно "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // NaN , правильно "9px"
"$" + 4 + 5 // NaN , , правильно "$45"
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // NaN , Infinity
"  -9  " + 5 // -4 , правильно "  -9  5"
"  -9  " - 5 // -14
null + 1 //  1
undefined + 1 // NaN
" \t \n" - 2 // NaN , правильно -2
*/

/* let a = promt('первое число');
let b = promt('второе число');

alert(+a + +b);
*/
/* 5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // не понимаю, правильно false
null === +"\n0\n" // не понимаю, правильно false
*/

/* if ("0") {
  alert( 'Привет' ); // нет, правильно да, не увидел что это строка
} */

/* let languagename = prompt('Какое «официальное» название JavaScript?');

if (languagename == 'ECMAScript) {
  alert('Верно');
} else {
  alert('Не знаете? ECMAScript!');
} 
*/

/* let number = prompt('Введите число');

if (number > 0) {
  number = '1';
} else if (number < 0) {
  number = '-1';
} else if (number == 0) {
  number = '0';
}
alert(number);
*/

/* let result = a + b < 4 ? 'Мало' : 'Много';
 */

/* let login = prompt('Введите логин');

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

  alert( message ); что ему не нравится??? 
Почему после решения проблемы, код перестаёт работать???
*/

/* alert( null || 2 || undefined ); // 2

alert( alert(1) || 2 || alert(3) ); // 1, правильно сначала 1, затем 2.

alert( 1 && null && 2 ); // null

alert( alert(1) && alert(2) ); // undefined, правильно сначала 1, затем undefined

alert( null || 2 && 3 || 4 ); // сначала проверит 2 && 3, получит 3, далее null || 3 || 4, выведет null, правильно 3
*/

/* if (age >= 14 && age <= 90)

if (!(age >= 14) && !(age <= 90))

if (age < 14 || age > 90)
*/

/* let age = prompt('Введите число');

if (age >= 14 && age <= 90) {
 age = 'Правильно';
} else if (age <= 14 || age >= 90) {
 age = 'Неправильно!';
} 
alert(age);  
*/