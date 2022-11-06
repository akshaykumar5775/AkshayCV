const express= require('express');
const app=express();

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
app.get("/",function(req,res){
  res.sendFile('/index.html', { root:"public"});
});
app.get("/applications",function(req,res){
  res.sendFile('/applications.html',{root:"public"});
});
app.get("/kill",function(req,res){
  res.sendFile('/index.html', { root:"public"});
});
function app1(){
  window.location.href = 'http://www.google.com';
}

app.set('view engine', 'ejs');
app.listen(PORT , () => {
    console.log(`Our app is running on port ${ PORT }`);
});
