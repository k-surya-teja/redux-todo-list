import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const TaskInput = () => {

    const [task, setTask] = useState("");
    const dispatch = useDispatch();
    const currentDate = new Date();
    const addTask = () => {
        if (task.trim() !== '') {
            dispatch(addTodo({
                id: Date.now(),
                title : task,
                date : currentDate,
                selected: false,
            }));
            setTask("");
        }
    }

        return (
            <div className='container' style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <input type="task" value={task} id='input-todo' placeholder='Enter a Task'
                    style={{
                        width: '60%',
                        border: '1px solid grey',
                        borderRadius: '10px',
                        backgroundColor:'white',
                        height: '50px',
                        paddingLeft: '20px'
                    }}

                    onChange={(e) => {
                        setTask(e.target.value);
                    }} />
                <button className='btn btn-success px-4' onClick={addTask}>Add +</button>
            </div>
        )
    }

    export default TaskInput;
