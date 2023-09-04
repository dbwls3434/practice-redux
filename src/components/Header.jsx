import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loginAdmin, setLoginAdmin] = useState(null)

  useEffect(() => {
    setLoginAdmin(JSON.parse(localStorage.getItem('loginAdmin')))
  }, [dispatch, navigate])

  const onLogOut = () => {
    localStorage.removeItem('loginAdmin')
    setLoginAdmin(null)
    navigate('/')
  }

  return (
    <header className="Header">
      <h1>Practice Redux</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="post">Post</Link>
          </li>
          <li>
            <Link to="user">User</Link>
          </li>
          {loginAdmin && (
            <>
              <li>
                <Link to="admin">Admin</Link>
              </li>
              <li>
                <button onClick={onLogOut}>LogOut</button>
              </li>
            </>
          )}
          {!loginAdmin && (
            <>
              <li>
                <Link to="login">LogIn</Link>
              </li>
              <li>
                <Link to="signup">SignUp</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
