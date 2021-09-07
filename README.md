### _Books Library React App_

### _DEMO: [здесь](https://churbanov-books-library.web.app/)_ 

### _О работе приложения:_ 

При разработке столкнулся с рядом проблем.\
Одна из них - по ТЗ книги должны располагаться на нескольких полках, больше одной на полке.
Поскольку приложение должно быть адаптивным, трудно решить данную задачу с помощью простой flex-разметки.

Поэтому я создал отдельный компонент, который играет роль книжных полок. 
Чтобы разделить книги по полкам в зависимости от ширины контейнера, нужно знать также внутренние отступы в контейнере. 
Поскольку они прописаны в стилях, я не придумал, как можно решить эту задачу и сделал костыль.

По коду есть вермишель местами и не самые хорошие практики, не успел уже поправить.

### _О функционале:_ 

В левом компоненте отображаются книги.
Книги делятся на несколько полок таким образом, чтобы на каждой полке помещалось n книг в обычном состоянии и одна в развёрнутом.
При клике на книгу, она поворачивается лицевой стороной, и в правом компоненте отображается подробная информация о ней.
При клике на другую книгу, либо на пустое место на полках, книга возвращается в начальное положение.
Также в правом компоненте есть кнопки "Удалить" и "Изменить". При удалении запрашивается подтверждение в модальном окне.

При изменении книги или добавлении новой используется также модальное окно с несколькими полями ввода,
в которых настроена динамическая валидация данных (впервые реализовывал такое не реакте,
потому не уверен в том, насколько хорошей практикой это является).

В целом работой сам не очень доволен, можно было сделать лучше.\
**На работу ушло около 14 часов рабочего времени.**

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.
