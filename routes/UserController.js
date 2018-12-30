const express=require('express');
const router =express.Router();
const User = require("../models/User");

router.get('/login',function(req,res,next){

res.render('login'); 

})

router.post('/signup',function(req,res,next){
    
console.log(req.body);


    var newUser= new   User(req.body).save(function(err,data){
        if (err) throw err;
        
       
        res.redirect('/api/user/profile/'+ data._id);
       
    });
      


          
        
        });


router.post('/login',function(req,res,next){
    let temp;
    console.log(req.body.password);
    User.findOne({"email":req.body.email})
    .then((data)=>{
        temp = data
        if(!temp){
            return Promise.reject({
                message: "Wrong email"
            })
        }

        
       return  User.findOne({"email":req.body.email,"password":req.body.password})
    }).then((data)=>{
          temp=data;
         if(!temp){
             
            return Promise.reject({

                meassage:"Wrong Password"
            })
         }
         return data;

    }).then((data)=>{
          res.redirect('/api/user/profile/'+ data.id);
       
    }).catch((err)=>{
        res.status(400).json(err)
        
    })



    
        });
router.get('/signup',function(req,res,next){

    res.render('signup');
    
    })



router.get('/profile/:id',function(req,res,next){

   

    
    User.findOne({"_id":req.params.id}).then((data)=>{
console.log(data);
        
        res.render('profile',{user:data});
    }) 
    
    })
    





router.get('/update/:id',function(req,res,next){


res.render('UpdatePage',{id:req.params.id});

})

router.put('/update/:id',function(req,res,next){
    User.findOneAndUpdate(req.params.id,req.body).then((data)=> {
        //res.send(data);
        res.redirect('/api/user/profile/'+ data.id);

    })

/*
    User.findByIdAndUpdate(req.params.id,req.body).then((data)=>
    {
    res.redirect('/api/user/profile/'+ data._id);

    });
    
    */
    
    })




module.exports= router;