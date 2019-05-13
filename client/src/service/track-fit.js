import axios from 'axios'
const URL = 'http://localhost:3001'

const api = axios.create({
  baseURL: `${URL}/user`
})
// get a user
export const fetchUser = async () => {
  try {
    const resp = await api.get(`/1`)
    return resp.data;
  } catch (e) {
    console.log(e)
  }
}

const newUser = {
  name: 'lalala',
  email: 'lalala@gmail.com',
  password: 'helloworld'
}

// create new user
export const createUser = async()=>{
   try{
      const res = await api.post('/create', newUser)
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


// get a food
export const fetchFood = async () => {
  try {
    const resp = await api.post(`/1/create-food`, newFood )
    return resp.data;

  } catch (e) {
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
