import express from "express";
import cors from "cors";
import db from "./config/db.js";

try{
    db.authenticate().then(()=>{
        db.sync({force:true})
        console.log("Banco de Dados Conectado...");
    })
}catch(error){
    console.error('Erro ao tentar conectar:',error)
}

const app = express()

app.use(cors())

app.use(express.json())

app.listen(5000, ()=> console.log(`Servidor rodando na 5000.`));