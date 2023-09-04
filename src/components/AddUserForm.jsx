import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, updateUser } from '../features/users/userSlice'

const AddUserForm = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)

  const [id, setId] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    if (user) {
      setId(user.id)
      setName(user.name)
    } else {
      setId('')
      setName('')
    }
  }, [user, dispatch])

  const onCreateUser = () => {
    const newUser = {
      name,
    }
    dispatch(createUser(newUser))

    setId('')
    setName('')
  }

  const onUpdateUser = () => {
    const existUser = {
      id,
      name,
    }
    dispatch(updateUser(existUser))

    setId('')
    setName('')
  }

  return (
    <section>
      <h2>Add a New User</h2>
      <form>
        <label htmlFor="postTitle">name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {!user && (
          <button type="button" onClick={onCreateUser}>
            Save User
          </button>
        )}
        {user && (
          <button type="button" onClick={onUpdateUser}>
            Update User
          </button>
        )}
      </form>
    </section>
  )
}

export default AddUserForm
