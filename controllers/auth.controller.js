const User=require('../models/user.model');
function getSignup(req,res){
res.render('customer/auth/signup');
}
function getLogin(req,res){
    res.render('customer/auth/Login');
    }
   async function signup(req,res){
      const user=  new User(req.body.email,
        req.body.password,
        req.body.fullname,
        req.body.street,
        req.body.city,
        req.body.pcode,
        req.body.city

      );
    await  user.signup()
    res.redirect('/login')
    }
module.exports={
    getSignup:getSignup,
    getLogin:getLogin,
    signup:signup
}