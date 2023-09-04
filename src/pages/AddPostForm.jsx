import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPostById, createPost } from '../features/posts/postSlice'
import { getUserList } from '../features/users/userSlice'

const AddPostForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { users } = useSelector((state) => state.user)

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    dispatch(getUserList())
  }, [])

  const onAdd = (e) => {
    const newPost = {
      title,
      content,
      author,
    }
    dispatch(createPost(newPost))
    navigate('/post')
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="title">Post Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="author">Author:</label>
        <select
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="button" onClick={onAdd}>
          Add Post
        </button>
      </form>
    </section>
  )
}

export default AddPostForm
