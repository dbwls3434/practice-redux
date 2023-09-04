import axios from 'axios'

const API_URL = '/posts'

const createPost = async (post) => {
  const res = await axios.post(API_URL, post)
  return res.data
}

const getPostList = async (post) => {
  const res = await axios.get(API_URL)
  return res.data
}

const updatePost = async (post) => {
  const res = await axios.put(`${API_URL}/${post.id}`, post)
  return res.data
}

const deletePost = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`)
  return id
}

const postService = {
  createPost,
  getPostList,
  updatePost,
  deletePost,
}

export default postService
