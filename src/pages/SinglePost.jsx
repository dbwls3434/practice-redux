import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getPostById } from '../features/posts/postSlice'

const SinglePost = () => {
  const { postId } = useParams()

  const post = useSelector((state) => getPostById(state, Number(postId)))

  if (!post) {
    return (
      <section>
        <h2>Post Not Found</h2>
      </section>
    )
  }

  return (
    <article>
      <h2>{post.title}</h2>
      <p className="excerpt">{post.content}</p>
      <p className="postCredit">{post.author}</p>
      <p className="postCredit">
        <Link to={`/post/${post.id}/edit`}>Edit Post</Link>
      </p>
    </article>
  )
}

export default SinglePost
