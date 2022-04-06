
function Task(props) {
    const {task : {id, title, teamMamber, priority}} = props
   // console.log(props.task);
    return (

        <tr>
            <td> 
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp" alt="avatar 1" style={{width: '45px', height: 'auto'}} />
            <span> {teamMamber} </span>
            </td>
            <td> {title} </td>
            <td>
                <h6 className="mb-0"><span className="badge bg-danger">{priority}</span></h6>
                 
            </td>
            <td> 
                <button className="btn btn-Delete"><i className='bx bx-trash-alt'></i></button>
                <button className="btn btn-Check"><i className='bx bx-check'></i></button>
             </td>
        </tr>

    );
}

export default Task;