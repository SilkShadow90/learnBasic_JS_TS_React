// получение Ноды
const jsNode = document.getElementById('dashboard'); // <div id="dashboard"></div>

// Создание тега заголовка
const h1 = document.createElement('h1');
// добавление в заголовок текста
h1.innerText = 'Страница тестирования JS';
// Добавление заголовка в <div id="dashboard"></div>
jsNode.append(h1);

// Массив параграфов текста
const textArray = [
  'Для работы c JS пишите код в <b>js/main.js</b>',
  'или подключите новый файл <script src="js/ваш-файл.js"></script> в файле index.html в конце body после <script src="js/main.js"></script>',
  'чтобы вывести какие-то данные из JS в браузер напрямую можно использовать функции <b>alert("ваш текст")</b> или <b>console.log("Ваш текст")</b>',
  'если необходимо вывести данные на HTML страницу нужно создать тег div с произвольным id и получить эту ноду на уровне JS',
  '<b>const jsNode = document.getElementById("ваш-id");</b> - пример добавления описан в файле js/dashboard.js',
];

let i;

for (i = 0; i < textArray?.length; i++) {
  // создание тега <p>
  const p = document.createElement('p');
  // поиск текста в массиве по индексу
  const text = textArray[i];
  // проверка на исключение скриптов в тексте
  if (text.match('<script')?.length) {
    // добавление в <p> текста
    p.innerText = text;
  } else {
    // добавление в <p> нод или текста
    p.innerHTML = text;
  }
  // добавление <p> дочерним элементом в <div id="dashboard"></div>
  jsNode.append(p);
}

// итог:
// <div id="dashboard">
//   <h1>...</h1>
//   <p>...</p>
//   <p>...</p>
//   <p>...</p>
// </div>

// Создание тега заголовка h2
const h2 = document.createElement('h1');
// добавление в заголовок текста
h2.innerText = 'Напоминания:';
// Добавление заголовка в <div id="dashboard"></div>
jsNode.append(h2);

function postHTMLNode(text, innerNodeTag, parentNode) {
  const node = document.createElement(innerNodeTag);
  node.innerHTML = text;
  parentNode.append(node);
}

const textAfterH2Array = [
  '<b>Переменные</b>: <br/><b>var</b> - глобальная устаревшая переменная; <br/><b>const</b> блочная константа; <br/><b>let</b> - блочная переменная',
  '<b>Типы данных</b>: <br/><b>string</b>, <b>number</b>, <b>bigInt</b>, <b>boolean</b>, <b>null</b>, <b>undefined</b>, <b>object</b>, <b>symbol</b>',
  '<b>Взаимодействие</b>: <br/><b>alert</b>, <b>prompt</b>, <b>confirm</b>',
  '<b>Приведение к логическому типу</b>: <br/><b>все</b> приводится к <b>true</b> кроме <b>null</b>, <b>undefined</b>, <b>0</b>, <b>""</b>, <b>NaN</b>',
  '<b>Сравнения</b>: <br/>Больше/меньше: a > b, a < b. <br/>Больше/меньше или равно: a >= b, a <= b. <br/>Равно: a == b. <br/>Обратите внимание, для сравнения используется двойной знак равенства ==. Один знак равенства a = b означал бы присваивание.<br/>Не равно. В математике обозначается символом ≠, но в JavaScript записывается как a != b',
  '<b>Операторы</b>: <br/>Присваивание =<br/>Сложение + (также конкатенация строк),<br/>Вычитание -,<br/>Умножение *,<br/>Деление /,<br/>Взятие остатка от деления %,<br/>Возведение в степень **.',
  '<b>Логические операторы</b>: <br/>И && - проверяет все операнды на логическое true до первого false - возвращает последний элемент до которого дойдет<br/>или || - проверяет все операнды на логическое true до первого true - возвращает первый не falsy элемент или последний если все элементы falsy,<br/>НЕ ! - возвращает логическое значение обратное операнду,<br/>?? - почти || только ориентируется не falsy, а на null/undefined',
  '<b>Циклы</b>: <br/><b>while(условие)</b><br/><b>do{код}while(условие)</b><br/><b>for(начало; условие; шаг)</b>',
  '<b>Переключатель</b>: <br/><b>switch(условие) { case значение_условия: код; case значение_условия: код }',
  '<b>Функции</b>: <br/><b>function имя(параметры) {...тело...}',
  '<b>Стрелочные функции</b>: <br/><b>const имя = (параметры) => {...тело...}',
];

textAfterH2Array.forEach((text) => postHTMLNode(text, 'p', jsNode));
