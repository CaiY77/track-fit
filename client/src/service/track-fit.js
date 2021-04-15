import axios from 'axios'
const URL = process.env.REACT_APP_DATA_BASE_URL;

const api = axios.create({
  baseURL: `${URL}/user`,
  headers: {"Access-Control-Allow-Origin": "*"}
})
// get a user
export const fetchUser = async (id) => {
  try {
    const resp = await api.get(`/${id}`)
    return resp.data;
  } catch (e) {
    console.log(e)
  }
}
//get user Goal
export const fetchGoal = async(id)=>{
  try {
    const resp = await api.get(`/${id}/goal`)
    return resp.data;
  } catch (e) {
    console.log(e)
  }
}
//create Goal
export const createGoal = async(id, goal)=>{
  try{
    const resp = await api.post(`/${id}/create-goal`, goal)
    return resp.data;
  }
  catch(e){
    console.log(e)
  }
}

//update Goal
export const updateGoal = async(id,updateGoal)=>{
  try{
    await api.put(`/update-goal/${id}`,updateGoal);
  }
  catch(e){
    console.log(e)
  }
}



//find the all food
export const fetchFood = async(id)=>{
  try{

    const res = await api.get(`/${id}/food`);
    return res.data;

  }catch(e){
    console.log(e)
  }
}


// create a food
export const createFood = async (user,newFood) => {
  try {
    const resp = await api.post(`/${user}/create-food`, newFood )
    return resp.data;
  } catch (e) {
    console.log(e)
  }
}

// update food
const updateFooood = {
  food: 'potatoooooosss'
}

export const updateFood = async () => {
  try {
    await api.put(`/update-food/8`, updateFooood)
  }
  catch(e){
    console.log(e)
  }
}


//delete a food
export const deleteFood = async (user,food)=>{
  try{
    const res = await api.delete(`/${user}/food-entry/${food}`)
    return res.data;
  }
  catch(e){
    console.log(e)
  }
}

//find all exercise
export const fetchExercise = async(id)=>{
  try{

    const res = await api.get(`/${id}/exercise`)
    return res.data;

  }catch(e){
    console.log(e)
  }
}


// create excersise
export const createExercise = async (user,newExercise) => {
  try {
    const res = await api.post(`/${user}/create-exercise`, newExercise)
    console.log(res)
    return res.data;

  } catch (e) {
    console.log(e)
  }
}

//update exercise
const updateEx = {
  exercise : "die",
}

export const updateExercise = async()=>{
  try{
    await api.put(`/update-exercise/3`,updateEx);

  }
  catch(e){
    console.log(e)
  }
}


//delete a exercise
export const deleteExercise = async (user,exercise)=>{
  try{
    const res = await api.delete(`/${user}/exercise-entry/${exercise}`)
    // return res.data;/
  }
  catch(e){
    console.log(e)
  }
}
