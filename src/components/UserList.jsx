import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserList, deleteUser, reset } from '../features/users/userSlice'
import Spinner from '../components/Spinner'

const UserList = () => {
  const dispatch = useDispatch()
  const { users, isLoading, isSuccess, isError } = useSelector(
    (state) => state.user
  )

  useEffect(() => {
    if (!isLoading && !isSuccess) {
      dispatch(getUserList())
    }
  }, [isSuccess, isError, dispatch])

  const onDeleteUser = (id) => {
    dispatch(deleteUser(id))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <section>
      <h2>User List</h2>
      {users.map((user) => (
        <article key={user.id}>
          <p className="excerpt">{user.id}</p>
          <p className="postCredit">{user.name}</p>
          <button onClick={() => onDeleteUser(user.id)}>delete</button>
        </article>
      ))}
    </section>
  )
}

export default UserList
