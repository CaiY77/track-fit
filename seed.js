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
