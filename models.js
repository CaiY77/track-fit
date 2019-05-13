const Sequelize = require('sequelize');

const db = new Sequelize({
    database: 'track_fit',
    dialect: 'postgres',
    define:{
        underscored: true,
        returning: true
    }
})

const User = db.define('data',{
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.INTEGER
})

const Goal = db.define('goal',{
  execiseGoal: Sequelize.INTEGER,
  foodGoal: Sequelize.INTEGER
})

const FoodEntries = db.define('entries',{
  sportsKind = Sequelize.STRING,
  foodKind = Sequelize.STRING
})

const ExerciseEntries = db.define('entries',{
  sportsKind = Sequelize.STRING,
  foodKind = Sequelize.STRING
})

module.export = {
  db,
  User,
  Goal,
  Entries
}
