import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminList, setAdmin } from '../features/admins/adminSlice'

const LogIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    dispatch(getAdminList())
  }, [])

  const { admins } = useSelector((state) => state.admin)

  const onLogIn = () => {
    const existAdmin = admins.find((admin) => admin.email === email)

    if (!existAdmin) {
      alert('email do not exists')
      return
    }

    if (existAdmin.password === password) {
      alert('password do not match')
      return
    }

    const loginAdmin = {
      name: existAdmin.name,
      email: existAdmin.email,
    }

    localStorage.setItem('loginAdmin', JSON.stringify(loginAdmin))
    dispatch(setAdmin(loginAdmin))

    navigate('/')
  }

  return (
    <section>
      <h2>LogIn</h2>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={onLogIn}>
          LogIn
        </button>
      </form>
    </section>
  )
}

export default LogIn
