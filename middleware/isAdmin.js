module.exports=function isAdmin (req,res,next){

if(req.params.isAdmin===true){

   return next;
}
else{
console.log(req);
  return  res.send({'error':'Not an Admin'})
}



}