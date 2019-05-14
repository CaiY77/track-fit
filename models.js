const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')

const db = new Sequelize({
    database: 'trackfit_db',
    dialect: 'postgres',
})

const User = db.define('user', {
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: {
      args: false,
      msg: 'email is required'
    },
    unique: {
      args: true,
      msg: 'email must be unique'
    },
    validate: {
      isEmail: {
        args: true,
        msg: 'email format is invalid'
      }
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: {
      args: false,
      msg: 'password is required'
    }
  }
})

User.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 12)
  user.password = hashedPassword
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
