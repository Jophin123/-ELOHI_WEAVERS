const express = require('express');
const app = express();
const csrf = require('csurf');
const errorHandleMiddleware = require('./middlewares/error-handling');
const addCsrfTokenMiddleware = require('./middlewares/csrf-token');
const path = require('path');
const authRoutes = require('./routes/auth.routes');
const expressSession = require('express-session');

const createSessionConfig = require('./config/session');
const sessionConfig = createSessionConfig();
const db = require('./data/database')
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: false }));

app.use(expressSession(sessionConfig));
app.use(csrf());
app.use(addCsrfTokenMiddleware);
app.use(errorHandleMiddleware);
app.use(authRoutes);
db.connectToDatabase().then(function () {
    app.listen(3000);
}).catch(function (error) {
    console.log(error);
    console.log("failed to connect");
})

