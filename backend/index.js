import express from "express";
import cors from "cors";
import db from "./config/db.js";
import clienteRouter from "./routes/clienteRouter.js"

try{
    db.authenticate().then(()=>{
        db.sync()
        console.log('Banco de Dados Conectado.');
    });
}catch(error){
    console.error('Erro ao tentar conectar:',error)
}

const app = express()

app.use(cors());

app.use(express.json());

app.use("/cliente", clienteRouter)

app.listen(process.env.PORT, ()=> console.log(`Servidor rodando na ${process.env.PORT}.`));