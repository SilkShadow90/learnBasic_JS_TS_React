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

type TMaster = typeof masters[number]; // 'Vasia' || 'Petia' || 'Alex',

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
  const regexpMath = new RegExp(/\d+\s[+\-*/][*]?\s\d+/);

  if (!regexpMath.test(str)) {
    return NaN;
  }
  // eslint-disable-next-line no-new-func
  return (new Function(`return ${str}`))(); // не безопастно!!!
}

// console.log(math('1 + 3')); // 4
// console.log(math('1 - 3')); // -2

/*
Дан массив с датами.
Необходимо написать функцию, которая вернёт объект вида:

{
  "2019": ["05-02", "22-09" "07-12"];
  "2015": ["12-01"];
  "2010": ["10-06", "25-07"];
}

Даты в массивах должны быть отсортированы по возрастанию
*/

interface IDateObject {
  date: string;
}

interface ISortedDateObject {
  [key: string]: string[];
}

const data: IDateObject[] = [
  { date: '2019-12-07' },
  { date: '2015-01-12' },
  { date: '2010-07-25' },
  { date: '2010-06-10' },
  { date: '2019-02-02' },
  { date: '2019-09-22' },
];

function sortDate(arr: IDateObject[]): ISortedDateObject {
  const maxLevel = 2;
  const secretKeyToVictory = '\u0000';

  // работает в принципе и без нее :)
  function sortLeveling(a: string[], b: string[], level = 0): number {
    switch (true) {
      case a[level] > b[level]:
        return level ? 1 : -1;
      case a[level] < b[level]:
        return level ? -1 : 1;
      case level === maxLevel:
        return 0;
      case a[level] === b[level]:
      default:
        return sortLeveling(a, b, level + 1);
    }
  }

  return arr
    .map((item: IDateObject) => item.date.split('-'))
    .sort(sortLeveling)
    .reduce((acc: ISortedDateObject, item: string[]) => {
      // для нужного отображения костылек в виде пустого символа \u0000
      const objectKey: string = secretKeyToVictory + item[0];

      if (!acc[objectKey]) {
        acc[objectKey] = [];
      }

      acc[objectKey].push(item.slice(1).reverse().join('-'));
      // acc[objectKey].push(`${item[2]}-${item[1]}`); // не принципиально

      return acc;
    }, {});
}

console.log(sortDate(data));

/* Напишите функцию, которая найдет все наборы анаграмм в строке
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке (рост-сорт-торс).
*/

const str = 'адрес карп кума куст мир мука парк рим среда стук рост сорт трос';

function getAnagrams(str: string): string[] {
  function toAlphabet(value: string): string {
    return value.split('').sort().join('');
  }

  function anagramsLength(value: string): number {
    return value.split('-').length;
  }

  function sortAnagramsCount(a: string, b: string): number {
    return anagramsLength(a) - anagramsLength(b);
  }

  const anagramsArray: string[] = str
    .split(' ')
    .sort((a: string, b: string) => a.length - b.length)
    // вариант с map легче читается но перебирает весь массив array.length * array.length раз и требуетя очистка дублей
    // map ~ 1.400ms
    // .map((value: string, _, array: string[]) => array
    //   .filter((item: string) => toAlphabet(value) === toAlphabet(item))
    //   .join('-'))
    // вариант с reduce более оптимизированный так как основной массив перебирается один раз, но сложнее в восприятии
    // reduce ~ 0.850ms
    .reduce((acc: string[], value) => {
      const index = acc.findIndex((item) => toAlphabet(item.split('-')?.[0]) === toAlphabet(value));
      if (index !== -1 && !acc[index].split('-').includes(value)) {
        acc[index] += `-${value}`;
      } else {
        acc.push(value);
      }

      return acc;
    }, [])
    .sort(sortAnagramsCount);
  // return Array.from(new Set(anagramsArray)); // при map - удаление дублей
  return anagramsArray; // при reduce
}

console.log(getAnagrams(str));

/* Напишите функцию, которая принимает строку из чисел и возвращает строку с максимальным и минимальным числами из начальной строки

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

*/

function highAndLow1(str: string): string {
  // первый вариант - самый простой в исполнении - самый не защищенный
  const numbersArray: Array<string | number> = str
    // .replace(/[^\d\s-]/g, '') // добавление защищенности делает его не таким уж простым))
    .split(' ');

  const min: number = Math.min(...numbersArray as number[]);
  const max: number = Math.max(...numbersArray as number[]);

  return `${min} ${max}`;
}

function highAndLow2(str: string): string {
  // второй вариант - самый масштабируемый
  const numbersArray: string[] = str
    .split(' ')
    .filter((value) => isFinite(Number(value)))
    .sort((a, b) => Number(a) - Number(b));

  return `${numbersArray[0]} ${numbersArray[numbersArray?.length - 1]}`;
}

function highAndLow3(str: string): string {
  // третий вариант - самый оптимизированный - самый трудночитаемый
  return str
    .split(' ')
    .reduce(((acc: [number, number], value: string) => {
      const number = Number(value);

      switch (true) {
        case isNaN(number):
          break;
        case !acc.length:
          return [number, number];
        case number < acc[0]:
          acc[0] = number;
          break;
        case number > acc[1]:
          acc[1] = number;
          break;
        default:
      }

      return acc;
    }), [])
    .join(' ');
}

console.log(highAndLow1('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'));
console.log(highAndLow2('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'));
console.log(highAndLow3('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'));
