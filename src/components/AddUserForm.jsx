import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createUser } from '../features/users/userSlice'

const AddUserForm = () => {
  const dispatch = useDispatch()

  const [name, setName] = useState('')

  const onCreateUser = () => {
    const newUser = {
      name,
    }
    dispatch(createUser(newUser))

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
        <button type="button" onClick={onCreateUser}>
          Save User
        </button>
      </form>
    </section>
  )
}

export default AddUserForm
