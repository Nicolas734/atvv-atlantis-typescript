import db from "../config/db.js";
import { Sequelize } from "sequelize";
import Acomodacao from "./acomodacao.js"
import Cliente from "./cliente.js";

const Hospedagem = db.define("hospedagens",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    cliente_id:{
        type:Sequelize.INTEGER
    },
    acomodacao_id:{
        type:Sequelize.INTEGER
    }
})

Hospedagem.belongsTo(Cliente,{foreignKey:"cliente_id"})
Cliente.Hospedagem = Cliente.hasMany(Hospedagem,{foreignKey:"cliente_id"})

Hospedagem.belongsTo(Acomodacao,{foreignKey:"acomodacao_id"})
Acomodacao.Hospedagem = Acomodacao.hasMany(Hospedagem,{foreignKey:"acomodacao_id"})

export default Hospedagem;