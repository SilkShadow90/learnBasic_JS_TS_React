// /**
//   * Описание задачи: Напишите функцию, которая проверяет, является ли элемент именно простым объектом, а не массивом, null и т.п.
//   * Ожидаемый результат: true если это объект, false в противном случае. ({ a: 1 }) => true, ([1, 2, 3]) => false
//   * Сложность задачи: 1 of 5
//   * @param element - элемент для проверки
//   * @returns {boolean}
// */

// const isPlainObject = (element) => {
//   return typeof element === 'object' && element !== null;
// };

// const data = { a: 1 };
// console.log(isPlainObject(data)); // true

// /**
//   * Описание задачи: Напишите функцию, которая возвращает вложенный массив вида [[key, value], [key, value]].
//   * Ожидаемый результат: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
//   * Сложность задачи: 1 of 5
//   * @param {Object} object - любой объект для трансформации
//   * @returns {Array} - вложенный массив
// */

// export const makePairs = (object) => {
//   return Object.entries(object);
// };

// const data = { a: 1, b: 2 };
// console.log(makePairs(data)); // [['a', 1], ['b', 2]]

// /**
//   * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
//   * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
//   * Сложность задачи: 2 of 5
//   * @param {Object} object - любой объект
//   * @param {?} args - список значений для удаления
//   * @returns {Object} - новый объект без удаленных значений
// */

// const without = (object, ...args) => {
//   const objectClone = Object.assign(object);
//   args.forEach((key) => {
//     if (objectClone.hasOwnProperty(key)) {
//       delete objectClone[key];
//     }
//   });

//   return objectClone;
// };

// const data2 = { a: 1, b: 2, c: 3 };
// console.log(without(data2, 'b', 'c')); // { a: 1 }

// /**
//   * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
//   * Ожидаемый результат: ({}) => true,
//       ({ a: undefined }) => true,
//       ({ a: 1 }) => false
//   * Пустые значения: '', null, NaN, undefined
//   * Сложность задачи: 2 of 5
//   * @param {Object} object - объект с примитивами
//   * @returns {boolean}
// */

// const isEmpty = (object) => !Object.values(object).filter((value) => value).length;

// const data = { a: 1, b: undefined };
// const data2 = { a: undefined };
// console.log(isEmpty(data)); // false
// console.log(isEmpty(data2)); // true

// /**
//   * Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
//   * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
//   * Сложность задачи: 2 of 5
//   * @param {Object<string | number>} firstObj - объект с примитивами
//   * @param {Object<string | number>} secondObj - объект с примитивами
//   * @returns {boolean}
// */

// const isEqual = (firstObject, secondObject) => {
//   if (Object.entries(firstObject).length !== Object.entries(secondObject).length) {
//     return false;
//   }

//   return Object.entries(firstObject).every(([key, value]) => value === secondObject[key]);
// };

// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };
// const data4 = { a: 1, b: 2, c: 3 };
// console.log(isEqual(data, data2)); // true
// console.log(isEqual(data, data3)); // false
// console.log(isEqual(data, data4)); // false

// /**
//   * Описание задачи: Напишите функцию, которая вызывает метод массива на заданный путь объекта.
//   * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
//   * Сложность задачи: 3 of 5
//   * @param {Object} object
//   * @param {String} path - путь в объекте
//   * @param {String} func - метод массива для исполнения
//   * @param {Array} [args] - список аргументов
//   * @returns {?}
// */

// export const invoke = (object, path, func, args) => {
//     const pathArray = path.split('.');
//     return object[pathArray[0]][pathArray[1]][func](...args);
//   };
  
//   const data = { a: { b: [1, 2, 3] } }
//   console.log(invoke(data, 'a.b', 'splice', [1, 2])); // [2, 3]

/**
  * Описание задачи: Напишите функцию, которая поверхностно находит пересечения объектов и возвращает объект пересечений.
  * Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }
  * @param {Object<string | number>} firstObj - объект с примитивными значениями
  * @param {Object<string | number>} secondObj - объект с примитивными значениями
  * @returns {Object}
*/

const intersection = (firstObject, secondObject) => {
  ;
};

const data = { a: 1, b: 2 };
const data2 = { c: 1, b: 2 };
console.log(intersection(data, data2)); // { b: 2 }