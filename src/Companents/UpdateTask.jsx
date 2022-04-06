import React from "react";

function UpdateTask({
  displayPopUpdate,
  CloseUpdate,
  handelChange,
  id,
  title,
  teamMamber,
  priority,
  updateTask,
  error,
}) {
  return (
    displayPopUpdate && (
      <div className="add-component">
        <form>
          <h1>Update Task ✍️</h1>
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
          <input
            type="hidden"
            placeholder="Enter Member Name"
            name="id"
            value={id}
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
              type="click"
              className="submit"
              onClick={(e) => updateTask(e)}
            >
              Update
            </button>
            <button
              type="button"
              className="btn-outline-danger"
              onClick={() => CloseUpdate()}
            >
              close
            </button>
          </div>
        </form>
      </div>
    )
  );
}

export default UpdateTask;
