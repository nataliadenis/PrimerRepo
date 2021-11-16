const express = require ('express');
const app = express() ;

const port = 8043;
app.listen (port,()=>console.log('Escuchando en el puerto ${port}'))
app.get ('/',(req,res)=>{
    res.send('Hola Mundo')
})
