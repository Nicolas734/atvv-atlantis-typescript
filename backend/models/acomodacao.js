import db from "../config/db.js";
import { Sequelize } from "sequelize";

const Acomodacao = db.define("acomodacoes",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nomenclatura:{
        type:Sequelize.STRING
    },
    camaSolteiro:{
        type:Sequelize.INTEGER
    },
    camaCasal:{
        type:Sequelize.INTEGER
    },
    suite:{
        type:Sequelize.INTEGER
    },
    climatizacao:{
        type:Sequelize.BOOLEAN
    },
    garagem:{
        type:Sequelize.INTEGER
    }
})

export default Acomodacao;