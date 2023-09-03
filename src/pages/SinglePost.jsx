import { Link } from 'react-router-dom'

const SinglePost = () => {
  return (
    <article>
      <h2>title</h2>
      <p className="excerpt">content...</p>
      <p className="postCredit">author</p>
      <p className="postCredit">
        <Link to="/post/1/edit">Edit Post</Link>
      </p>
    </article>
  )
}

export default SinglePost
