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
5 > 4 // true
"ананас" > "яблоко" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n" // не понимаю, правильно false
null === +"\n0\n" // не понимаю, правильно false