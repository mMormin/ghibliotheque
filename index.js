const express = require('express');
const app = express();
const notFound = require('./app/middlewares/404');
const router = require('./app/router');

app.set("view engine", "ejs");
app.set("views", "./app/views");
app.use(express.static("public"));
app.use(router, notFound);

app.listen(3000);
