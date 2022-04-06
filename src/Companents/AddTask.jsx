import React from 'react';

function AddTask({displayPop , Changedisplay, handelChange, title, teamMamber, priority, addTask}) {
    return (
        displayPop && (<div>
            <form >
                <input type="text" placeholder="Enter Task Title" name="title" value={title} onChange={handelChange}/>
                <input type="text" placeholder="Enter Member Name" name="teamMamber" value={teamMamber} onChange={handelChange}/>

                <select value={priority} onChange={handelChange} name="priority">
                    <option value="high">high Priority</option>
                    <option value="medium">medium Priority</option>
                    <option value="low">low Priority</option>
                </select>
                <button type="submit" onClick={(e)=>addTask(e)}>save</button>
                <button type="button" onClick={() => Changedisplay()}>close</button>
            </form>
        </div>)
    );
}

export default AddTask;
