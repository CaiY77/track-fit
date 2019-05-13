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

const FoodEntries = db.define('food_entries',{
  = Sequelize.STRING,
  foodKind = Sequelize.STRING
})

const ExerciseEntries = db.define('exercise_entries',{
  sportsKind = Sequelize.STRING,
  foodKind = Sequelize.STRING
})

User.hasMany(ExerciseEntries, {
  onDelete: 'cascade'
});

User.hasMany(FoodEntries, {
  onDelete: 'cascade'
});

Goal.belongsTo(User)

module.export = {
  db,
  User,
  Goal,
  Entries
}
