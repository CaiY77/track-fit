const { db,User,Goal,FoodEntries,ExerciseEntries } = require('...models.js')

async function main() {

  /* delete everything in the database */

  await User.destroy({
    where: {}
  });
  await Goal.destroy({
    where: {}
  });
  await FoodEntries.destroy({
    where: {}
  });
  await ExerciseEntries.destroy({
    where: {}
  });

  const user1 = await User.create({
    name: 'Billy',
    email: 'billy@gmail.com',
    password: 'helloworld'
  })

  const goal = await Goal.destroy({
    calBurned: 3,
    calIntake: 3
  })

  const foodEntries = await FoodEntries.create({
    food: 'cheese',
    calGained: 50,
    date: '2019-03-03'
  })

  const exerciseEntries = await ExerciseEntries.create({
    exercise: 'jumping',
    calBurned: 5,
    date: '2019-03-03'

  })

  await user1.setGoal(goal)
  await user1.setFoodEntries(goal)
  await user1.setExerciseEntries(exerciseEntries)





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
