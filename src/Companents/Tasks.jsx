import Task from './Task';

function Tasks( {tasks} ) {
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
                   {tasks.length ?  tasks.map(task =><Task key={task.id} task={task} /> ) : <td>There are no tasks</td>}
                </tbody>
            </table>
        </div>
    );
}

export default Tasks;