const Sequelize = require('sequelize');
const bcrypt = require('bcrypt')

const options = process.env.NODE_ENV === 'production' 
? { 
  dialectOptions: { 
    ssl: { 
      require: true, 
      rejectUnauthorized: false, 
    }, 
  }, 
  ssl: true, 
} 
: {};

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/trackfit_db',{
  dialect: 'postgres', 
  define:{ 
    underscored: true, 
    returning: true 
  }, 
  ...options,
});

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


User.beforeCreate(async (user, options) => {
  const hashedPassword = await bcrypt.hash(user.password, 12)
  user.password = hashedPassword
})


module.exports = {
  db,
  User,
  Goal,
  Food,
  Exercise
}
