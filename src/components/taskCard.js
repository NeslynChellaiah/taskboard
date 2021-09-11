import React from "react";
import '../styles/taskCard.css';

function TaskCard() {
    return (
        <div className="card">
            <div className="card-header">
                <div className="card-title">
                    Task number
                </div>
                <div>
                    <select className="status-dropdown" value="not_started" onChange={()=>0}>
                        <option value="not_started">Not started</option>
                        <option value="in_progress">In progress</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
            </div>
            <div className="card-body">

            </div>
            <div className="card-footer">

            </div>
        </div>
    );
}

export default TaskCard;