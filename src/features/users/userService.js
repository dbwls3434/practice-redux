import axios from 'axios'

const API_URL = '/users'

const createUser = async (user) => {
  const res = await axios.post(API_URL, user)
  return res.data
}

const getUserList = async (user) => {
  const res = await axios.get(API_URL)
  return res.data
}

const deleteUser = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`)
  return id
}

const userService = {
  createUser,
  getUserList,
  deleteUser,
}

export default userService
