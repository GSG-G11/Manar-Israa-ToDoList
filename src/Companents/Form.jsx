import React from "react";

function Form(props) {
  const { priorityFilter, handelChange, Changedisplay, CompleteFilter } = props;
  return (
    <div className="form-parant">
      <nav className="nav">
        <form className="form">
          <select
            className="priority-select"
            name="priorityFilter"
            value={priorityFilter}
            onChange={handelChange}
          >
            <option value=" " disabled >Filter by priority</option>
            <option value="all">all</option>
            <option value="high">high Priority</option>
            <option value="medium">medium Priority</option>
            <option value="low">low Priority</option>
          </select>
          <select
            name="CompleteFilter"
            className="priority-select"
            value={CompleteFilter}
            onChange={handelChange}
            placeholder="Filter by Status"
          >
            <option value=" " disabled >Filter by Status</option>
            <option value="all">all</option>
            <option value={true}>Done</option>
            <option value={false}>In progress</option>
          </select>
        </form>
        <button className="btn btn-primary" onClick={() => Changedisplay()}>
          {" "}
          <i class="bx bx-plus"></i>  Add
        </button>
      </nav>
    </div>
  );
}

export default Form;
