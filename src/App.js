import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import BasicLayout from './layouts/BasicLayout'
import Home from './pages/Home'
import PostList from './pages/PostList'
import User from './pages/User'
import AddPostForm from './pages/AddPostForm'
import SinglePost from './pages/SinglePost'
import EditPostForm from './pages/EditPostForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />} />
          <Route path="post">
            <Route index element={<PostList />} />
            <Route path=":postId" element={<SinglePost />} />
            <Route path=":postId/edit" element={<EditPostForm />} />
            <Route path="add" element={<AddPostForm />} />
          </Route>
          <Route path="user" element={<User />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
