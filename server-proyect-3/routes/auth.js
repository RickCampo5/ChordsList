const router = require('express').Router();
const User = require('../models/User');
const passport = require('passport');


//multer config
const multer = require('multer');
const upload = multer({dest: './public/assets'});


function isAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        console.log(req.user)
        return next()
    }else{
        res.json({message:"no tienes permiso"});
    }
}

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        res.redirect('/private')
    }else{
        next();
    }
}

router.get('/logout', (req,res,next)=>{
    req.logout();
    res.send('cerrado');
});

router.post('/login', passport.authenticate('local'), (req,res,next)=>{
    req.app.locals.user = req.user
    res.json(req.user)
});


router.post('/signup', (req,res,next)=>{
    User.register(req.body, req.body.password)
    .then(user=>{
        res.json(user)
    })
    .catch(e=>next(e));
})


module.exports = router;