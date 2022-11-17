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
        type:Sequelize.INTEGER
    },
    numero:{
        type:Sequelize.INTEGER
    },
    cliete_id:{
        type:Sequelize.INTEGER
    }
})

Telefone.Cliente = Telefone.belongsTo(Telefone,{foreignKey:{name:"cliente_id"}})
Cliente.Telefone = Cliente.hasMany(Cliente,{foreignKey:"cliente_id"})

export default Telefone;