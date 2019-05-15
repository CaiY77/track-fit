const tokenService = {
    storeToken: (token) => {
      // store token in local storage
      localStorage.setItem('token', token)
    },
  
    fetchToken: () => {
      // get token from local storage
      return localStorage.getItem('token')
    },
  
    clearToken: () => {
      // clear token from local storage
      localStorage.clear()
    }
  }
  
  export default tokenService
  