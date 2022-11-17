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
        type:Sequelize.STRING
    },
    tipo:{
        type:Sequelize.STRING
    },
    dataExpedicao:{
        type:Sequelize.STRING
    },
    id_cliente:{
        type:Sequelize.INTEGER
    }
})

Documento.Cliente = Documento.belongsTo(Documento,{foreignKey:{name:"id_cliente"}})
Cliente.Documento = Cliente.hasMany(Cliente,{foreignKey:"id_cliente"})

export default Documento;