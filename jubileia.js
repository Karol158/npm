const express = require('express');
const app= express();
let objetos= [];

app.get('/Publicacao/:texto',(req , res)=>{
      res.json(objetos);
});

app.post('/Publicacao/:texto',(req , res)=>{
  let objetopublicaçao={

     texto:req.params.texto,
  }
  objetos.push(objetopublicaçao)
    
});


app.delete('/Publicacao',(req , res)=>{
  objetos.pop()
  res.json(objetos)

});



app.listen(3000,()=>{
console.log('Servidor em execução...')

})

app.get('/download',(req , res)=>{
res.download("arquivo.txt");
})

app.get('/redirect',(req  ,res) =>{
  res.redirect("https://portal.ifpe.edu.br/")
})

app.get('/finalizar',(req  ,res) =>{
  res.end()
})



