import React from 'react'

const AddUserForm = () => {
  return (
    <section>
      <h2>Add a New User</h2>
      <form>
        <label htmlFor="postTitle">name:</label>
        <input type="text" id="name" name="name" />
        <button type="button">Save User</button>
      </form>
    </section>
  )
}

export default AddUserForm
