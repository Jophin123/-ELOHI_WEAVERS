const express = require('express');

const path=require('path');
const authRoutes=require('./routes/auth.routes');
const app=express();
app.use(express.static('public'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(authRoutes);

app.listen(3000);