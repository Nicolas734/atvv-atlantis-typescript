import express from "express";
import cors from "cors";
import db from "./config/db.js";
import acomodacaoRouter from "./routes/acomodacaoRouter.js";
import clienteRouter from "./routes/clienteRouter.js";
import dependenteRouter from "./routes/dependenteRouter.js";
import documentoRouter from "./routes/documentoRouter.js";
import enderecoRouter from "./routes/enderecoRouter.js";
import hospedagemRouter from "./routes/hospedagemRouter.js";
import telefoneRouter from "./routes/telefoneRouter.js";

try{
    db.authenticate().then(()=>{
        db.sync({force:true})
        console.log('Banco de Dados Conectado.');
    });
}catch(error){
    console.error('Erro ao tentar conectar:',error);
}

const app = express();

app.use(cors());

app.use(express.json());

app.use("/acomodacao", acomodacaoRouter);

app.use("/cliente", clienteRouter);

app.use("/dependente", dependenteRouter);

app.use("/documento", documentoRouter);

app.use("/endereco", enderecoRouter);

app.use("/hospedagem", hospedagemRouter);

app.use("/telefone", telefoneRouter);


app.listen(process.env.PORT, ()=> console.log(`Servidor rodando na ${process.env.PORT}.`));