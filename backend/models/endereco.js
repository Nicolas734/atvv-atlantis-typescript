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
    id_cliente:{
        type:Sequelize.INTEGER
    }
});

Endereco.belongsTo(Cliente,{foreignKey:{name:"id_cliente"}});
Cliente.Endereco = Cliente.hasMany(Endereco,{foreignKey:"id_cliente"});

export default Endereco;