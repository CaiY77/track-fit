const Sequelize = require('sequelize');

const db = new Sequelize({
    database: 'track_fit',
    dialect: 'postgres',
    define:{
        underscored: true,
        returning: true
    }
})



module.export = {
  db,
}
