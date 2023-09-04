import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  getPostById,
  updatePost,
  deletePost,
} from '../features/posts/postSlice'
import { getUserList } from '../features/users/userSlice'

const EditPostForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { postId } = useParams()

  const { users } = useSelector((state) => state.user)
  const post = useSelector((state) => getPostById(state, Number(postId)))

  const [id, setId] = useState(post.id)
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content)
  const [author, setAuthor] = useState(post.author)

  useEffect(() => {
    dispatch(getUserList())
  }, [])

  const onUpdate = (e) => {
    const existPost = {
      id,
      title,
      content,
      author,
    }
    dispatch(updatePost(existPost))
    navigate(`/post/${id}`)
  }

  const onDelete = (delId) => {
    dispatch(deletePost(delId))
    navigate('/post')
  }

  if (!post) {
    return (
      <section>
        <h2>Post Not Found</h2>
      </section>
    )
  }

  return (
    <section>
      <h2>Edit a Post</h2>
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
        <button type="button" onClick={onUpdate}>
          Update Post
        </button>
        <button
          className="deleteButton"
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete Post
        </button>
      </form>
    </section>
  )
}

export default EditPostForm
