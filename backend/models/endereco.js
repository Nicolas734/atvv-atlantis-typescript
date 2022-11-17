import db from "../config/db.js";
import { Sequelize } from "sequelize";
import Cliente from "./cliente.js";

const Endereco = db.define("enderecos",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    rua:{
        type:Sequelize.STRING
    },
    bairro:{
        type:Sequelize.STRING
    },
    cidade:{
        type:Sequelize.STRING
    },
    estado:{
        type:Sequelize.STRING
    },
    pais:{
        type:Sequelize.STRING
    },
    cep:{
        type:Sequelize.STRING
    },
    cliente_id:{
        type:Sequelize.INTEGER
    }
})

Endereco.Cliente = Endereco.belongsTo(Endereco,{foreignKey:{name:"cliente_id"}})
Cliente.Endereco = Cliente.hasMany(Endereco,{foreignKey:"cliente_id"})

export default Endereco;