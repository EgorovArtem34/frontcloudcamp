# Тестовое задание для поступления в FrontCloudCamp

Требуется разработать форму отправки данных по готовому макету.

Технические требования:
Для разработки приложения использовать макет

В рамках дизайна формы реализовано 3 отдельных таба(шага) формы, которые можно переключать между собой. При переходе от таба к табу (в том числе возвращаясь на предыдущий) информация должна сохранятся.

На первом экране необходимо добавить информацию о себе и по нажатию на кнопку будет происходить переход на форму. При переходе должен меняться роут.

На каждом этапе формы нужно валидировать значения конкретного шага

После отправки формы показывать модальное окно с success или error. Модалку нужно будет разработать самому, не используя сторонние библиотеки или ui-компоненты.

Для отправки формы использовать api https://api.sbercloud.ru/content/v1/bootcamp/frontend

Адаптивная версия обязательна, способ реализации по твоему выбору


[vercel deploy](https://frontcloudcamp-egorovartem34.vercel.app/)


## Использованные технологии
- React
- TypeScript
- Redux, Redux Toolkit
- React-router-dom
- Formik, yup
- classnames
- Vite


## Установка
1. Склонируйте репозиторий `git clone https://github.com/EgorovArtem34/frontcloudcamp`
2. Перейдите в директорию проекта `cd frontcloudcamp`
3. Установите зависимости `make install`
5. Запустите локальную версию `make start`
6. Нажмите на кнопку `h` для показа настроек
  ```press r to restart the server
  press u to show server url
  press o to open in browser
  press c to clear console
  press q to quit
  ```

## Скриншоты

![](https://raw.githubusercontent.com/EgorovArtem34/screenshots/master/frontcloud/1.JPG)
![](https://raw.githubusercontent.com/EgorovArtem34/screenshots/master/frontcloud/2.JPG)
![](https://raw.githubusercontent.com/EgorovArtem34/screenshots/master/frontcloud/3.JPG)
![](https://raw.githubusercontent.com/EgorovArtem34/screenshots/master/frontcloud/4.JPG)
![](https://raw.githubusercontent.com/EgorovArtem34/screenshots/master/frontcloud/5.JPG)
