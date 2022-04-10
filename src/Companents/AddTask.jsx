function AddTask({
  displayPop,
  Changedisplay,
  handelChange,
  title,
  teamMamber,
  priority,
  addTask,
  error,
  isEditing,
}) {
  return (
    displayPop && (
      <div className="add-component">
        <form>
          <h1>Add Task ✍️</h1>
          <input
            type="text"
            placeholder="Enter Task Title"
            name="title"
            value={title}
            onChange={handelChange}
          />
          <input
            type="text"
            placeholder="Enter Member Name"
            name="teamMamber"
            value={teamMamber}
            onChange={handelChange}
          />

          <select value={priority} onChange={handelChange} name="priority">
            <option value="high">high Priority</option>
            <option value="medium">medium Priority</option>
            <option value="low">low Priority</option>
          </select>
          <span className="error">{error}</span>
          <div className="btn-popup">
            <button
              type="submit"
              className="submit"
              onClick={(e) => addTask(e)}
            >
              {isEditing?'Update':'Add'}
            </button>
            <button
              type="button"
              className="btn-outline-danger"
              onClick={() => Changedisplay()}
            >
              close
            </button>
          </div>
        </form>
      </div>
    )
  );
}
export default AddTask;
