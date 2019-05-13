const Sequelize = require('sequelize');

const db = new Sequelize({
    database: 'trackfit_db',
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
  calBurned: Sequelize.INTEGER,
  calIntake: Sequelize.INTEGER
})

const FoodEntries = db.define('food_entries',{
  food = Sequelize.STRING,
  calGained = Sequelize.INTEGER,
  date = Sequelize.DATE
})

const ExerciseEntries = db.define('exercise_entries',{
  exercise = Sequelize.STRING,
  calBurned = Sequelize.INTEGER,
  date = Sequelize.DATE
})

User.hasMany(ExerciseEntries, {
  onDelete: 'cascade'
});

User.hasMany(FoodEntries, {
  onDelete: 'cascade'
});

Goal.belongsTo(User);


module.export = {
  db,
  User,
  Goal,
  FoodEntries,
  ExerciseEntries
}
