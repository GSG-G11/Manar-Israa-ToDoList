import Task from "./Task";

function Tasks({
  tasks,
  deleteTask,
  checkTask,
  priorityFilter,
  CompleteFilter,
  ChangedisplayForUpdate,
}) {
  const Filterarry = tasks.filter((task) => {
    if (priorityFilter !== "all" && CompleteFilter === "all") {
      return task.priority === priorityFilter;
    } else if (priorityFilter === "all" && CompleteFilter === "true") {
      return task.done === true;
    } else if (priorityFilter !== "all" && CompleteFilter === "true") {
      return task.priority === priorityFilter && task.done === true;
    } else if (priorityFilter === "all" && CompleteFilter === "false") {
      return task.done === false;
    } else if (priorityFilter !== "all" && CompleteFilter === "false") {
      return task.priority === priorityFilter && task.done === false;
    } else {
      return task;
    }
  });
  return (
    <div>
      <table className="task-tab">
        <thead>
          <tr>
            <th>Team Member</th>
            <th>Title</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Filterarry.length ? (
            Filterarry.map((task) => (
              <Task
                key={task.id}
                ChangedisplayForUpdate={ChangedisplayForUpdate}
                task={task}
                deleteTask={deleteTask}
                checkTask={checkTask}
              />
            ))
          ) : (
            <tr>
              <td>There are no tasks</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Tasks;
