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

// перебор массива с текстом
textArray.forEach((text) => {
  // создание тега <p>
  const p = document.createElement('p');
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
});

// итог:
// <div id="dashboard">
//   <h1>...</h1>
//   <p>...</p>
//   <p>...</p>
//   <p>...</p>
// </div>
