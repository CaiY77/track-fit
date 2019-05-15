import axios from 'axios'
const URL = 'http://localhost:3001'

const api = axios.create({
  baseURL: `${URL}/user`
})
// get a user
export const fetchUser = async (id) => {
  try {
    const resp = await api.get(`/${id}`)
    console.log(resp.data)
    return resp.data;
  } catch (e) {
    console.log(e)
  }
}
export const getUser = async (User) => {
  try {
    console.log("from get user ", User)
    const resp = await api.post(`/auth/login`,User)
    console.log(resp.data)
    return resp.data;
  } catch (e) {
    console.log(e)
  }
}

// create new user
export const createUser = async(newUser)=>{
   try{
      const res = await api.post('/create', newUser)
      console.log(`axios response ${res.data.id}`);

      return res.data;

   }
   catch(e){
     console.log(e)
   }
}


const newFood = {
  food: 'chips',
  calGained: 5000,
  date: '2019-07-07'
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
export const createFood = async () => {
  try {
    const resp = await api.post(`/1/create-food`, newFood )
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
    const res = await api.put(`/update-food/8`, updateFooood)
  }
  catch(e){
    console.log(e)
  }
}


//delete a food
export const deleteFood = async ()=>{
  try{
    const res = await api.delete(`/1/food-entry/1`)
    return res.data;
  }
  catch(e){
    console.log(e)
  }
}

// hardcode new excersise
const newExercise = {
  exercise: `walking`,
  calBurned: 5,
  date: '2019-05-05'
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
export const createExercise = async () => {
  try {
    const res = await api.post(`/1/create-exercise`, newExercise)
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
    const res = await api.put(`/update-exercise/3`,updateEx);

  }
  catch(e){
    console.log(e)
  }
}



//delete a exercise
export const deleteExercise = async ()=>{
  try{
    const res = await api.delete(`/1/exercise-entry/1`)
    return res.data;
  }
  catch(e){
    console.log(e)
  }
}
