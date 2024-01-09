import { DataTypes, Model } from 'sequelize'
import sequelize from '../mysql-database'

class SettingsModel extends Model {}

SettingsModel.init(
  {
    key: DataTypes.STRING,
    value: DataTypes.STRING,
  },
  {
    modelName: 'settings',
    sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
)

SettingsModel.removeAttribute('id')

export default SettingsModel
