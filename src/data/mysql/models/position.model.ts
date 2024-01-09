import { DataTypes, Model } from 'sequelize'

import sequelize from '../mysql-database'

class PositionModel extends Model {}

PositionModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  },
  {
    modelName: 'positions',
    sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
)

export default PositionModel