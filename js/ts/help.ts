// TS Подсказка

const masters = [
  'Vasia',
  'Petia',
  'Alex',
] as const; // as const - гарантирует что массив не изменится

enum EUserMasters {
  Vasia = 'Vasia',
  Petia = 'Petia',
  Alex = 'Alex',
}

type TMaster = typeof masters[number]; // 'Vasia', 'Petia', 'Alex',

// описание объекта
interface ICar {
  speed: number; // скорость
  weals: number; // колеса
  brand: string; // марка
  master?: EUserMasters | TMaster; // хозяин - необязательное свойство - может быть взят только из masters
}

const car: ICar = {
  speed: 120,
  weals: 4,
  brand: 'Lada',
};

car.master = EUserMasters.Vasia || 'Vasia';

function sum(...arg: number[]): number {
  return arg.reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0);
}

// sum(1, 2, 3, 4, 5); // 15

const operators = [
  '+',
  '-',
  '*',
  '/',
  '**',
] as const;

type TOperator = typeof operators[number];

type TCalcString = `${number} ${TOperator} ${number}`;

function math(str: TCalcString): number {
  // eslint-disable-next-line no-new-func
  return (new Function(`return ${str}`))(); // не безопастно!!!
}

// console.log(math('1 + 3')); // 4
// console.log(math('1 - 3')); // -2
