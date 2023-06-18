import axios from 'axios';


//Register user
const register = async (userData) => {
    const response = await axios.post('https://citibike-api.vercel.app/api/auth/register/', userData)
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log(response.data)
    }
    return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post('http://localhost:5000/api/auth/login', userData)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  return response.data
}


// Logout user
const logout = () => {
    localStorage.removeItem('user')
    window.location.replace('/')
}


const serverCalls = {
  register,
  login,
  logout
}

export default serverCalls;



