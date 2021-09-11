import React from "react";
import TaskCard from "./taskCard";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import '../styles/layout.css';

function Layout (){
    return (
        <div className='main-layout'>
            <div className="list-area">
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>            
            <div className="list-area">
                <TaskCard />    
            </div>    
            <div className="list-area">
                <TaskCard />    
            </div>            
        </div>
    )
}

export default Layout;