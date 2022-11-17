import db from "../config/db.js";
import { Sequelize } from "sequelize";
import Cliente from "./cliente.js";

const Documento = db.define("documentos",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    numero:{
        type:Sequelize.INTEGER
    },
    tipo:{
        type:Sequelize.STRING
    },
    dataExpedicao:{
        type:Sequelize.STRING
    },
    cliente_id:{
        type:Sequelize.INTEGER
    }
})

Documento.Cliente = Documento.belongsTo(Documento,{foreignKey:{name:"cliente_id"}})
Cliente.Documento = Cliente.hasMany(Cliente,{foreignKey:"cliente_id"})

export default Documento;