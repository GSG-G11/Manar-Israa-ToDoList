function Task(props) {
  const {
    task: { id, title, teamMamber, priority, done },
    deleteTask,
    checkTask,
    ChangedisplayForUpdate,
  } = props;

  return (
    <tr>
      <td className="info-member">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
          alt="avatar 1"
          style={{ width: "45px", height: "auto" }}
        />
        <span> {teamMamber} </span>
      </td>
      <td className={done ? "complete" : " "}> {title} </td>
      <td>
        <button
          className={
            priority === "high"
              ? "high"
              : priority === "medium"
              ? "medium"
              : "low"
          }
        >
          {priority}
        </button>
      </td>
      <td>
        <button
          className="btn btn-Delete action "
          onClick={() => deleteTask(id)}
        >
          <i className="bx bx-trash-alt"></i>
        </button>
        <button className="btn btn-Check action " onClick={() => checkTask(id)}>
          <i className="bx bx-check"></i>
        </button>
        <button
          className="btn btn-Check action "
          onClick={() =>
            ChangedisplayForUpdate(id, title, teamMamber, priority)
          }
        >
          <i class='bx bx-pencil' ></i>
        </button>
      </td>
    </tr>
  );
}

export default Task;
