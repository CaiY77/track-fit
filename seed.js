const { db,User,Goal,Food,Exercise } = require('./models.js')

async function main() {

  /* delete everything in the database */

  await User.destroy({
    where: {}
  });
  await Goal.destroy({
    where: {}
  });
  await Food.destroy({
    where: {}
  });
  await Exercise.destroy({
    where: {}
  });



  const user1 = await User.create({
    name: 'Billy',
    email: 'billy@gmail.com',
    password: 'helloworld'
  })

  const goal = await Goal.create({
    calBurned: 5000,
    calIntake: 2000
  })

  const foodEntries = await Food.create({
    food: 'cheese',
    calGained: 50,
    date: '2019-03-03'
  })
  const foodEntries2 = await Food.create({
    food: 'cheese',
    calGained: 60,
    date: '2019-03-04'
  })
  const foodEntries3 = await Food.create({
    food: 'cheese',
    calGained: 70,
    date: '2019-05-14'
  })

  const exerciseEntries = await Exercise.create({
    exercise: 'push-ups',
    calBurned: 50,
    date: '2019-05-06'

  })
  const exerciseEntries2 = await Exercise.create({
    exercise: 'sit-ups',
    calBurned: 60,
    date: '2019-05-14'

  })const exerciseEntries3 = await Exercise.create({
    exercise: 'pull-ups',
    calBurned: 40,
    date: '2019-03-03'

  })

  // const fE = await Food.findByPk(foodEntries.id)

  await user1.setGoal(goal);
  await foodEntries.setUser(user1);
  await foodEntries2.setUser(user1);
  await foodEntries3.setUser(user1);
  await exerciseEntries.setUser(user1)
  await exerciseEntries2.setUser(user1)
  await exerciseEntries3.setUser(user1)



}

async function run() {
  try {
    await main();
  } catch (e) {
    console.error(e);
  } finally {
    await process.exit()
  }
}

run();
