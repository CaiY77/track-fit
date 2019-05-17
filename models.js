const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/trackfit_db',{
    database: 'trackfit_db',
    dialect: 'postgres',
    define:{
        underscored: true,
        returning: true
    }
})

const User = db.define('user',{
  name: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
})

const Goal = db.define('goal',{
  calBurned: Sequelize.INTEGER,
  calIntake: Sequelize.INTEGER
})

const Food = db.define('food_entrie',{
  food : Sequelize.STRING,
  calGained :Sequelize.INTEGER,
  date :Sequelize.DATE
})

const Exercise = db.define('exercise_entrie',{
  exercise : Sequelize.STRING,
  calBurned : Sequelize.INTEGER,
  date : Sequelize.DATE
})

User.hasMany(Exercise, {
  onDelete: 'cascade'
});

Exercise.belongsTo(User);

User.hasMany(Food, {
  onDelete: 'cascade'
});

Food.belongsTo(User);

User.hasOne(Goal);


module.exports = {
  db,
  User,
  Goal,
  Food,
  Exercise
}
