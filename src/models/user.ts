import { DataTypes, Model } from "sequelize";
import { sequelize } from "../data/config";
import Usuario from "../interfaces/userInterface";

class User extends Model<Usuario>{}
    
    User.init(  {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        rol: {
          type: DataTypes.ENUM('admin', 'dev', 'tester'),
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Usuario',
        timestamps: false 
      })
    

    