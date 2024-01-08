import { envs } from "./config"
import sequelize from "./data/mysql/mysql-database"
import { AppRoutes, Server } from "./presentation"

(() => {
  main()
})()

async function main(){
  
  await sequelize.sync()

  new Server({ 
    port: envs.PORT,
    routes: AppRoutes.routes
  }).start()
}