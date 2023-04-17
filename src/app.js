const express = require("express");
const routes = require("./routes");
const i18n = require('i18n');
const path = require("path");


i18n.configure({
  locales: ['en', 'pt-br'],
  directory: path.join(__dirname, 'locales'),
  defaultLocale: 'pt-br',
  cookie: 'lang',
  queryParameter: 'lang',
  objectNotation: true,
  devMode: true
});

const app = express();

app.use(express.json());
app.use(routes);
app.use(i18n.init);
app.listen(3000);