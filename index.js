const express = require('express');
const port = 9999;
const app = express();
const path = require('path');

app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'assets')));

app.get("/",async(req,res)=>{
    try {
        return res.render('home');
    } 
    catch (error) {
        console.log(error);
        return res.redirect('back'); 
    }
})

app.get('/bootstrap',async(req,res)=>{
    try {
        return res.render('bootstrap')
    } 
    catch (error) {
        console.log(error);
        return res.redirect('back');    
    }
})

app.get('/bootstrap2',async(req,res)=>{
    try {
        return res.render('bootstrap2')
    } 
    catch (error) {
        console.log(error);
        return res.redirect('back');    
    }
})

app.get('/bootstrap3',async(req,res)=>{
    try {
        return res.render('bootstrap3')
    } 
    catch (error) {
        console.log(error);
        return res.redirect('back');    
    }
})

app.get('/about',async(req,res)=>{
    try {
        return res.render('about')
    } 
    catch (error) {
        console.log(error);
        return res.redirect('back');    
    }
})

app.get('/services',async(req,res)=>{
    try {
        return res.render('services')
    } 
    catch (error) {
        console.log(error);
        return res.redirect('back');    
    }
})

app.get('/price',async(req,res)=>{
    try {
        return res.render('price')
    } 
    catch (error) {
        console.log(error);
        return res.redirect('back');    
    }
})

app.get('/work',async(req,res)=>{
    try {
        return res.render('work')
    } 
    catch (error) {
        console.log(error);
        return res.redirect('back');    
    }
})

app.get('/blog',async(req,res)=>{
    try {
        return res.render('blog')
    } 
    catch (error) {
        console.log(error);
        return res.redirect('back');    
    }
})

app.get('/contact',async(req,res)=>{
    try {
        return res.render('contact')
    } 
    catch (error) {
        console.log(error);
        return res.redirect('back');    
    }
})

app.get('/sass',async(req,res)=>{
    try {
        return res.render('sass')
    } 
    catch (error) {
        console.log(error);
        return res.redirect('back');    
    }
})

app.get('/colorlib',async(req,res)=>{
    try {
        return res.render('colorlib')
    } 
    catch (error) {
        console.log(error);
        return res.redirect('back');    
    }
})

app.get('/j_query',async(req,res)=>{
    try {
        return res.render('j_query')
    } 
    catch (error) {
        console.log(error);
        return res.redirect('back');    
    }
})

app.listen(port,(error)=>{
    if(error){
        console.log("Server Not Connect");
        return false;
    }
    console.log("Server Connected =",port);
})
