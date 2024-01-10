import { DataTypes, Model } from "sequelize"
import EmployeeModel from "./employee.model"
import LocationModel from "./location.model"

import sequelize from '../mysql-database'

export class ResponsiveModel extends Model {}

ResponsiveModel.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    serial_number: DataTypes.STRING,
    brand: DataTypes.STRING,
    model: DataTypes.STRING,
    type: DataTypes.STRING,
    comment: DataTypes.STRING,
    reference_number: DataTypes.INTEGER,
    is_signed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    assigner_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: EmployeeModel,
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
    receiver_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: EmployeeModel,
        key: 'id',
      },
    },
    approver_id: {
      type: DataTypes.STRING,
      allowNull: true,
      references: {
        model: EmployeeModel,
        key: 'id',
      },
    },
    created_at: DataTypes.DATE
  },
  {
    modelName: 'responsive',
    sequelize,
    timestamps: false,
    createdAt: false,
    indexes: [
      {
        unique: true,
        fields: ['id'],
      },
    ],
  }
)

ResponsiveModel.belongsTo(EmployeeModel, {
  foreignKey: 'assigner_id',
  as: 'assigner',
})
ResponsiveModel.belongsTo(EmployeeModel, {
  foreignKey: 'receiver_id',
  as: 'receiver',
})
ResponsiveModel.belongsTo(EmployeeModel, {
  foreignKey: 'approver_id',
  as: 'approver',
})
ResponsiveModel.belongsTo(LocationModel, {
  foreignKey: 'location_id',
  as: 'location',
})
