import db from "../config/db.js";
import { Sequelize } from "sequelize";
import Cliente from "./cliente.js";

const Telefone = db.define("telefones",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    ddd:{
        type:Sequelize.STRING
    },
    numero:{
        type:Sequelize.STRING
    },
    id_cliente:{
        type:Sequelize.INTEGER
    }
});

Telefone.belongsTo(Cliente,{foreignKey:{name:"id_cliente"}});
Cliente.Telefone = Cliente.hasMany(Cliente,{foreignKey:"id_cliente"});

export default Telefone;