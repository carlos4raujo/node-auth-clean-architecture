import { DataTypes, Model } from 'sequelize'

import sequelize from '../mysql-database'

class DeviceModel extends Model { }

DeviceModel.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: 'device',
    sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
)

export default DeviceModel

