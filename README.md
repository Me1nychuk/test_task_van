# Trailer Sales Website

![Trailer Sales Website](https://path/to/your/logo.png)

## Опис

Проект веб-сайту для продажу трейлерів. На цьому сайті користувачі можуть переглядати доступні трейлери, дізнаватися про їх характеристики, переглядати галерею зображень, читати відгуки та залишати коментарі. Сайт включає модальне вікно для детального перегляду трейлерів, а також функціонал додавання улюблених трейлерів.

## Встановлення

1. Клонування репозиторію:

   ```bash
   git clone https://github.com/your-username/trailer-sales-website.git

   ```

2. Перейдіть до директорії проекту:
   cd trailer-sales-website

3. Встановіть залежності:
   npm install

## Використання

1. Запуск проекту у режимі розробки:
   npm run dev

2. Побудова проекту для продакшну:
   npm run build

## Структура проекту

src/: Директорія з вихідним кодом проекту.
components/: Компоненти React.
AppBar/: Компонент для відображення хедера.
CarItem/: Компонент для відображення одного трейлера.
CarList/: Компонент для відображення списку трейлерів.
CarDetails/: Компонент для відображення властивостей авто.
Container/: Компонент для обмеження розмірів.
Modal/: Модальне вікно для детального перегляду трейлера.
Form/: Форма для коментарів.
Gallery/: Галерея зображень трейлера.
Reviews/: Компонент для відображення відгуків.
FavoriteList/: Компонент для відображення вподобаних траків.
Layout/: Універсальна обгортка сторінки.
redux/: Конфігурація та логіка Redux.
car/: Логіка для роботи з даними про трейлери.
favorite/: Логіка для роботи з даними про вподобанні трейлери.
hooks/: Користувацькі хуки.
helpers/: Допоміжні функції та типи.
styles/: Глобальні стилі та теми.
images/: Зображення, що використовуються в проекті.
page/: Компоненти сторінок
