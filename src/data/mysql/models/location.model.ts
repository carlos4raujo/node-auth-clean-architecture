import { DataTypes, Model } from 'sequelize'
import sequelize from '../mysql-database'

class LocationModel extends Model {}

LocationModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  },
  {
    modelName: 'locations',
    sequelize,
    timestamps: false,
    createdAt: false,
    updatedAt: false,
  }
)

export default LocationModel
