const express=require('express');
const router =express.Router();
const user = require("../models/User");
var methodOverride = require('method-override')
var isAdmin = require('../middleware/isAdmin')

router.get('/ViewUsers',isAdmin,function(req,res,next){

    user.find({},function(err,data){

        if (err) throw err;
        res.render('AdminView',{users:data});
        
    
    });
});
    router.delete('/deleteUser/:id',function(req,res,next){

        user.findOneAndDelete(req.params.id,function(err,data){

         if (err) throw err;
         else{
             res.redirect('/api/admin/ViewUsers');
         }
           
        })
        
        });   
        
        

        router.put('/UpdateUser/:id',function(req,res,next){

            //Update  a specfic user 
            
            });   



module.exports= router;