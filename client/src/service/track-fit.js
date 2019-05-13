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

// get a food
// export const fetchFood = async () => {
//   try {
//     const resp = await api.get(`/food`, )
//   }
// }
