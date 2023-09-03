const AddPostForm = () => {
  return (
    <section>
      <h2>Add a New Post</h2>
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
      </form>
    </section>
  )
}

export default AddPostForm
