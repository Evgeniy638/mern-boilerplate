# Начало работы

Делается один раз, потом повторять не нужно

## Установите глобальные вспомогательные пакеты

1. Установите lerna: `npm install --g lerna`

## Напишите переменные окружения
В пакете packages/server создайте файл `.env` и в него запишите следующие переменные окружения:
1. `MONGODB_CONNECTION_URL` - url для подключения к базе mongoDB

## Установите зависимости проекта

1. Установите зависимости: `npm i`
2. Установите зависимости пакетов и свяжите их: `npx lerna bootstrap`

Иногда могут возникать ошибки в связывании пакетов, для решение этого удалите node_modules (`rm node_modules`), очистите кеш npm (`npm cache clean --force`) и заново повторите ["установку зависимостей проекта"](#установите-зависимости-проекта).
