import { Sequelize } from "sequelize";
import "dotenv/config"

const db = new Sequelize(process.env.BD, 'root', process.env.BD_SENHA, {
    dialect: 'mysql',
    host: 'localhost'
});

export default db