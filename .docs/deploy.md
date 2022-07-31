# Деплой

В данном приложение процесс CI/CD организован с помощью ~~circle ci~~ github actions и heroku

Пример развёрнутого приложения: https://app-mern-boilerplate.herokuapp.com/

## Как настроить Деплой

### Создайте приложение на Heroku
1) Создайте приложение на сайте https://dashboard.heroku.com/apps
2) Добавьте все необходимые для работы приложения переменные среды (Settings > Config Vars)

### Настройте переменные среды в github репозитории

1) Получите `HEROKU_API_KEY` командой в консоли:
```sh
heroku login
heroku auth:token
```

2) Создайте `environment` с именем `heroku` в репозитории гитхаба (Репозиторий > Settings > Environments > New Environment)

3) Создайте в окружении `heroku` два секрета: `HEROKU_APP_NAME`(название приложения в heroku) и `HEROKU_API_KEY` (ключ, полученный в первом шаге)

## Полезные ссылки
1) https://github.com/CircleCI-Public/circleci-demo-javascript-react-app/blob/master/.circleci/config.yml
2) https://docs.github.com/en/actions
