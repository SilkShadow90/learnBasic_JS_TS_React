# Документация к площадке

## С чего начать

* Регистрируетесь на [github.com](https://github.com)


GitHub — веб-сервис, который основан на системе Git. Это такая социальная сеть для разработчиков, которая помогает удобно вести коллективную разработку IT-проектов. Здесь можно публиковать и редактировать свой код, комментировать чужие наработки, следить за новостями других пользователей. Именно в GitHub работаем мы, команда Академии, и студенты интенсивов.

Чтобы начать работу с GitHub, нужно зарегистрироваться на сайте, если вы ещё этого не сделали.

После того как у вас будет создан аккаунт в Github можно будет начать полноценно работать с ним.


* Смотрите основы по работе работы [GIT](https://learn.javascript.ru/screencast/git) (система контроля версий) - до главы работы с тегами

> Разобравшись

* После установки [GIT](https://git-scm.com/downloads) производим настройку своего профиля вводя в терминал поочереди команды:


    git config --global user.name "ВАШЕ_ИМЯ"
    git config --global user.email АДРЕС

> Заменив значения ВАШЕ_ИМЯ и АДРЕС вашими значениями.

* После указания своих данных, можно их просмотреть:


    git config --global --list

* создаете проект из репозитория 


Для начала определим, что такое репозиторий. Это рабочая директория с вашим проектом. По сути, это та же папка с HTML, CSS, JavaScript и прочими файлами, что хранится у вас на компьютере, но находится на сервере GitHub. Поэтому вы можете работать с проектом удалённо на любой машине, не переживая, что какие-то из ваших файлов потеряются — все данные будут в репозитории при условии, что вы их туда отправите. Но об этом позже.

Копировать или клонировать репу c GitHub можно по HTTPS или SSH.

    git clone https://github.com/SilkShadow90/learnBasic_JS_TS_React.git

Или через SSH

    git clone git@github.com:SilkShadow90/learnBasic_JS_TS_React.git


* Создайте свою ветку для работы с проектом


    git checkout "ВАШЕ_ИМЯ" на латинице :)


### Как сохранять работу

    git commit -m "назвние или номер задания"


### Как отправить работу

    git push origin


### Остальные возможности гита в [документации](https://git-scm.com/doc) и [скринкасте](https://learn.javascript.ru/screencast/git)




## Что теперь?!

### Развернуть окружение

> Необходимо установить:

- [NodeJS](https://nodejs.org/en/download/) - программная платформа, заставляющая работать [JS на уровне ОС](https://ru.wikipedia.org/wiki/Node.js).
- *NPM* - [менеджер пакетов](https://ru.wikipedia.org/wiki/Система_управления_пакетами) для JS - входит в пакет NodeJS
- [VSCode](https://code.visualstudio.com) - [IDE](https://ru.wikipedia.org/wiki/IDE) для работы с кодом
- [языковой пакет для VSCode](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ru) - руссификатор если надо

> Вы готовы что-то делать :)


### Старт проекта


- Необходимо выполнить установку зависимых библиотек 
    

    npm install


- старт Dev-окружения

        
    npm start

    Или если ошибки

    npm build - сборка окружения
    npm dev - старт сервера


> После запуска окружения сервер будет доступен [здесь](http://localhost:1234)

### Старт с базового JS

> [Главный ресурс](https://learn.javascript.ru) для изучения JS

- [Введение](https://learn.javascript.ru/getting-started)
- [Основы JavaScript](https://learn.javascript.ru/first-steps)
- [Не делай так](https://learn.javascript.ru/ninja-code)


### Стиль Кода

[![Стиль Кода](https://learn.javascript.ru/article/coding-style/code-style.svg)](https://learn.javascript.ru/coding-style)


### Старт с базового HTML

> Не горит

### Старт с базового CSS

> Не горит

## Доп материалы:

> [Онлайн редактор кода](https://jsfiddle.net) - Хорош, чтобы протестировать конкретный функционал

### Основные принципы программирования

- [KISS](https://www.youtube.com/watch?v=rix-fkrloq4) - Код должен быть тупым
- [YAGNI](https://www.youtube.com/watch?v=Ot2eB07rjcI) - А нужен ли этот код
- [DRY](https://www.youtube.com/watch?v=NWemqNMCesQ) - Не повторяйся

### Полезные для общего развития ссылки

- [Паттерн](https://refactoring.guru/ru/design-patterns/what-is-pattern)
- [Рефакторинг](https://refactoring.guru/ru/refactoring/what-is-refactoring)

### [Помощь](doc/TOC.md) — Помощь по архитектуре проекта. (на английском)

> Продолжение следует
