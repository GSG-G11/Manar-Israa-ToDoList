import Task from './Task';

function Tasks( {tasks,deleteTask,checkTask, priorityFilter, CompleteFilter} ) {

    const Filterarry = tasks.filter(task => {
        if(priorityFilter !== 'all' && CompleteFilter === 'all') {
            return task.priority === priorityFilter;
        }else if(priorityFilter === 'all' && CompleteFilter === 'true') {
            return task.done == 1;
        }else if(priorityFilter !== 'all' && CompleteFilter === 'true') {
            return task.priority === priorityFilter && task.done == 1;
        }else if(priorityFilter === 'all' && CompleteFilter === 'false') {
            return task.done == 0;
        }else if(priorityFilter !== 'all' && CompleteFilter === 'false') {
            return task.priority === priorityFilter && task.done == 0;
        }
        else{
            return task
        }
    });
    return (
        <div>
            <table className ='task-tab'>
                <thead>
                    <tr>
                        <th>Team Member</th>
                        <th>Title</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>   
                   {Filterarry.length ?  Filterarry.map(task =><Task key={task.id} task={task} deleteTask={deleteTask} checkTask={checkTask} /> ) : <td>There are no tasks</td>}
                </tbody>
            </table>
        </div>
    );
}

export default Tasks;