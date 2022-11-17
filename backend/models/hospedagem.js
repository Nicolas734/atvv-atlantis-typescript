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
    id_cliente:{
        type:Sequelize.INTEGER
    },
    id_acomodacao:{
        type:Sequelize.INTEGER
    }
})

Hospedagem.belongsTo(Cliente,{foreignKey:"id_cliente"})
Cliente.Hospedagem = Cliente.hasMany(Hospedagem,{foreignKey:"id_cliente"})

Hospedagem.belongsTo(Acomodacao,{foreignKey:"id_acomodacao"})
Acomodacao.Hospedagem = Acomodacao.hasMany(Hospedagem,{foreignKey:"id_acomodacao"})

export default Hospedagem;