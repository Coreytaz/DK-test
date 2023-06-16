# DK-test Blog 🔥

## 🛠 Технологии

- **NextJS**
- **TypeScript**
- **MobX** (хранение данных)
- **Axios**
- **Router(/pages)** (навигация)
- **React Hooks** (хуки)
- **Feature-Sliced Design** (архитектура)
- CSS-Modules / SCSS / @chakra-ui (стилизация)

## 🚀 Реализовано

## Задание

> Реализовать простой список постов блога с возможностью детального просмотра. Дизайн и доп. функционал на свой вкус.
> 

### Главная страница

- Сверстать список постов
    - Изображение
    - Название поста
    - Имя автора поста
    - Ссылку на детальную страницу
    - Пагинация (10 постов на страницу: `/posts?_limit=10&_page=0`) для реализации можно использовать npm пакеты на усмотрение.
    - Пагинация должна синхронизировать состояние с query параметрами, что бы сайт можно было открыть по ссылке на любую страницу
- Подключить API
    - Получение списка постов: GET https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1
    - Получение списка пользователей: GET https://jsonplaceholder.typicode.com/users
    - Получение случайного изображения: SRC https://loremflickr.com/1280/1280

### Детальная страница

- Сверстать пост
    - Изображение
    - Название поста
    - Имя автора поста
    - Текст поста
- Подключить API
    - Получение поста: GET [https://jsonplaceholder.typicode.com/posts/<id>](https://jsonplaceholder.typicode.com/posts/ID)
    - Получение одного пользователя: GET [https://jsonplaceholder.typicode.com/users/<id>](https://jsonplaceholder.typicode.com/users/ID)
    - Получение случайного изображения: SRC https://loremflickr.com/1280/1280
  ### Плюсом будет

- Реализовать
    - С использованием Components Chakra UI
    - С использованием Axios
    - Добавление нового поста, сделать в модальном окне.
        - Результат запроса вывести в консоль. Возможно, потребуется дополнительный заголовок: `'CONTENT-TYPE': 'APPLICATION/JSON; CHARSET=UTF-8'`.
- Подключение API
    - Реализация с использованием FormData: POST https://jsonplaceholder.typicode.com/posts

## 👀 Запуск Frontend

 ```shell
npm i
npm run dev
