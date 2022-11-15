import db from "../config/db.js";
import { Sequelize } from "sequelize";

const Cliente = db.define('clientes',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING
    },
    nomeSocial:{
        type:Sequelize.STRING
    },
    dataNascimento:{
        type:Sequelize.STRING
    },
    dataCadastro:{
        type:Sequelize.STRING
    },
    titular_id:{
        type:Sequelize.INTEGER,
    }
})

Cliente.Cliente = Cliente.belongsTo(Cliente,{foreignKey:{name:"titular_id"}})
Cliente.Cliente =Cliente.hasMany(Cliente,{foreignKey:"titular_id"})

export default Cliente