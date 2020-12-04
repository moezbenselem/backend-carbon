# backend-carbon

This is the backend for the [Nuit de l'Info challenge](https://www.nuitdelinfo.com/inscription/defis/287)

## Installation

clone or Download the code

Use the package manager [npm](https://www.npmjs.com/get-npm) to install packages.

```bash
npm install
```

## Usage

```bash
npm run dev
````

## Hosted at

Server : https://backend-carbon.herokuapp.com/

Database Host : https://remotemysql.com

[Database Diagram](https://github.com/moezbenselem/backend-carbon/blob/main/DB.png?raw=true)

### Endpoints

| Endpoint | Method | Result |
| ------ | ------ | ------|
| /questions | GET |  get all the questions of the quizz
| /contact | POST | send the user contact form
| /score | POST | send the user score of the quizz

## License

[MIT](https://choosealicense.com/licenses/mit/)
