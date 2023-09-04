import axios from 'axios'

const API_URL = '/admins'

const createAdmin = async (admin) => {
  const res = await axios.post(API_URL, admin)
  return res.data
}

const getAdminList = async (admin) => {
  const res = await axios.get(API_URL)
  return res.data
}

const updateAdmin = async (admin) => {
  const res = await axios.put(`${API_URL}/${admin.id}`, admin)
  return res.data
}

const deleteAdmin = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`)
  return id
}

const adminService = {
  createAdmin,
  getAdminList,
  updateAdmin,
  deleteAdmin,
}

export default adminService
