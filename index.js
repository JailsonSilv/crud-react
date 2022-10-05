const express = require("express");
const app = express();

// app.get  === Fazer requisições pegar valores
// app.post === Enviar fazer solicitações
// app.delete === deletar
// app.put === editar arquivos 

app.get('/', (req, res) => {
    res.send("Vai da muito certo")
})

app.listen(3001, ()=>{
    console.log("Rodando servidor!!!")
})