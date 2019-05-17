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
    calBurned: 1500,
    calIntake: 5000
  })

  const foodEntries = await Food.create({
    food: 'cheese',
    calGained: 50,
    date: '2018-07-03'
  })
  const foodEntries2 = await Food.create({
    food: 'chicken',
    calGained: 100,
    date: '2019-03-04'
  })
  const foodEntries3 = await Food.create({
    food: 'popcorn',
    calGained: 70,
    date: '2019-05-14'
  })
  const foodEntries4 = await Food.create({
    food: 'Halal',
    calGained: 1000,
    date: '2019-05-01'
  })
  const foodEntries5 = await Food.create({
    food: 'chocolate',
    calGained: 500,
    date: '2019-03-26'
  })

  const exerciseEntries = await Exercise.create({
    exercise: 'push-ups',
    calBurned: 50,
    date: '2019-04-01'

  })
  const exerciseEntries2 = await Exercise.create({
    exercise: 'sit-ups',
    calBurned: 60,
    date: '2019-05-14'

  })
  const exerciseEntries3 = await Exercise.create({
    exercise: 'pull-ups',
    calBurned: 40,
    date: '2019-03-03'

  })
  const exerciseEntries4 = await Exercise.create({
    exercise: 'marathon running',
    calBurned: 200,
    date: '2019-05-14'

  })
  const exerciseEntries5 = await Exercise.create({
    exercise: 'sleeping',
    calBurned: 10,
    date: '2019-05-15'

  })

  // const fE = await Food.findByPk(foodEntries.id)

  await user1.setGoal(goal);
  await foodEntries.setUser(user1);
  await foodEntries2.setUser(user1);
  await foodEntries3.setUser(user1);
  await foodEntries4.setUser(user1);
  await foodEntries5.setUser(user1);
  await exerciseEntries.setUser(user1)
  await exerciseEntries2.setUser(user1)
  await exerciseEntries3.setUser(user1)
  await exerciseEntries4.setUser(user1)
  await exerciseEntries5.setUser(user1)



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
