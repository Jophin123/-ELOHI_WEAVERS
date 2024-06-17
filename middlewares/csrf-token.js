function addCsrfToken(req,re,next){
    res.locals.csrfToken=req.csrfToken();
    next();

}
module.exports=addCsrfToken;