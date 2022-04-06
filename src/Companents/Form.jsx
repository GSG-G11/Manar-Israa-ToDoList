import React from 'react';

function Form(props) {
    const {priorityFilter, handelChange, Changedisplay} = props;
    return (
        <div>
            <nav className="nav">
                <form className="form">
                    <select name="priorityFilter" value={priorityFilter} onChange={handelChange}>
                        <option value="all">all</option>
                        <option value="high">high Priority</option>
                        <option value="meduim">medium Priority</option>
                        <option value="low">low Priority</option>
                    </select>

                </form>
                <button className="btn btn-primary" onClick={() => Changedisplay()} > Add</button>
            </nav>
        </div>
    );
}

export default Form;