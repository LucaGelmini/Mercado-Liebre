const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.resolve(__dirname,'public');
app.use('/public', express.static(publicPath));

app.get('/',(req, res)=> {
    res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.get('/register',(req, res)=> {
    res.sendFile(path.join(__dirname, '/views/register.html'));
});
app.get('/login',(req, res)=> {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor corriendo en el puerto 3000')
});