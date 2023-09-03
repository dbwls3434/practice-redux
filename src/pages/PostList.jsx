import { Link } from 'react-router-dom'

const PostList = () => {
  return (
    <section>
      <Link to="/post/add">New Post</Link>
      <article>
        <h2>
          <Link to="/post/1">title1</Link>
        </h2>
        <p className="excerpt">content1...</p>
        <p className="postCredit">author1</p>
      </article>
      <article>
        <h2>
          <Link to="/post/2">title2</Link>
        </h2>
        <p className="excerpt">content...</p>
        <p className="postCredit">author2</p>
      </article>
    </section>
  )
}

export default PostList
