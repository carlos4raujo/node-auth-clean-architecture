import {Sequelize} from 'sequelize'
import { envs } from '../../config'

const sequelize = new Sequelize(envs.MYSQL_DATABASE, envs.MYSQL_USERNAME, envs.MYSQL_PASSWORD, {
  dialect: 'mysql',
  host: envs.MYSQL_HOST,
})

export default sequelize