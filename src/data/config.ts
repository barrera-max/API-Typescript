import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('usuario.sqlite', '', '', {
    dialect: 'sqlite',
    
})

