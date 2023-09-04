import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  createAdmin,
  getAdminList,
  getAdminByEmail,
} from '../features/admins/adminSlice'

const SignUp = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')

  useEffect(() => {
    dispatch(getAdminList())
  }, [])

  const { admins } = useSelector((state) => state.admin)

  const onSignUp = () => {
    if (password !== passwordConfirm) {
      alert('password do not match')
      return
    }

    const existAdmin = admins.find((admin) => admin.email === email)

    if (existAdmin) {
      alert('the email exists')
      return
    }

    const newAdmin = {
      name,
      email,
      password,
    }

    dispatch(createAdmin(newAdmin))

    navigate('/login')
  }

  return (
    <section>
      <h2>SignUp</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <label htmlFor="passwordConfirm">Password Confirm:</label>
        <input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        <button type="button" onClick={onSignUp}>
          SignUp
        </button>
      </form>
    </section>
  )
}

export default SignUp
