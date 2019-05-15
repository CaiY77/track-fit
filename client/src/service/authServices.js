import tokenService from './tokenService'

const authService = {
  isAuthenticated: () => {
    // check if token exists in localStorage
    const token = tokenService.fetchToken('token')
    if (!token) {
      return false
    }

    return true
  },

  signOut: () => {
    // clear token from localStorage
    tokenService.clearToken()
  }
}

export default authService
