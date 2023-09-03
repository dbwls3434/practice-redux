const EditPostForm = () => {
  return (
    <section>
      <h2>Edit a Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" name="postTitle" />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor">
          <option></option>
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" />
        <button type="button">Save Post</button>
        <button className="deleteButton" type="button">
          Delete Post
        </button>
      </form>
    </section>
  )
}

export default EditPostForm
