import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAdminList, deleteAdmin, reset } from '../features/admins/adminSlice'
import Spinner from '../components/Spinner'

const AdminList = () => {
  const dispatch = useDispatch()
  const { admins, isLoading, isSuccess, isError } = useSelector(
    (state) => state.admin
  )

  useEffect(() => {
    if (!isLoading && !isSuccess) {
      dispatch(getAdminList())
    }
    reset()
  }, [isSuccess, isError, dispatch])

  const onDeleteAdmin = (id) => {
    dispatch(deleteAdmin(id))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <section>
      <h2>Admin List</h2>
      {admins.map((admin) => (
        <article key={admin.id}>
          <p className="postCredit">{admin.name}</p>
          <p className="postCredit">{admin.email}</p>
          <button onClick={() => onDeleteAdmin(admin.id)}>Delete</button>
        </article>
      ))}
    </section>
  )
}

export default AdminList
