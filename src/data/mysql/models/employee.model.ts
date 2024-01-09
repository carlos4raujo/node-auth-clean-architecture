import { DataTypes, Model } from 'sequelize'

import sequelize from '../mysql-database'

import LocationModel from "./location.model" 
import PositionModel from './position.model'

class EmployeeModel extends Model {}

EmployeeModel.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employee_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    boss_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: EmployeeModel,
        key: 'id',
      },
    },
    position_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: PositionModel,
        key: 'id',
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: LocationModel,
        key: 'id',
      },
    },
  },
  {
    modelName: 'employee',
    sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    indexes: [
      {
        unique: true,
        fields: ['employee_number'],
      },
    ],
  }
)

EmployeeModel.belongsTo(LocationModel, {
  foreignKey: 'location_id',
})

EmployeeModel.belongsTo(PositionModel, {
  foreignKey: 'position_id',
})

EmployeeModel.belongsTo(EmployeeModel, {
  foreignKey: 'boss_id',
  as: 'boss',
})

export default EmployeeModel

