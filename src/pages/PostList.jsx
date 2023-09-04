import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPostList } from '../features/posts/postSlice'
import Spinner from '../components/Spinner'

const PostList = () => {
  const dispatch = useDispatch()

  const { posts, isLoading, isError, isSuccess } = useSelector(
    (state) => state.post
  )

  useEffect(() => {
    dispatch(getPostList())
  }, [isError, isSuccess, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <section>
      <Link to="/post/add">New Post</Link>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h2>
          <p className="excerpt">
            {post.content.length > 20
              ? post.content.substring(20) + '...'
              : post.content}
          </p>
          <p className="postCredit">{post.author}</p>
        </article>
      ))}
    </section>
  )
}

export default PostList
