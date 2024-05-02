// TaskList.jsx
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { ListGroup } from 'react-bootstrap';
import { deleteTodo, selectTodo, selectAllTodos } from '../redux/todoSlice';

const TaskList = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos.todos);
    const [selectAllText, setSelectAllText] = useState('Select All');

    const anySelected = todos.some(todo => todo.selected);

    const handleDeleteSelected = () => {
        const selectedIds = todos.filter(todo => todo.selected).map(todo => todo.id);
        dispatch(deleteTodo(selectedIds));
        if (selectAllText === 'Deselect All') {
            setSelectAllText('Select All');
        }
    };

    const handleSelectAll = () => {
        if (selectAllText === 'Select All') {
            dispatch(selectAllTodos());
            setSelectAllText('Deselect All');
        } else {
            todos.forEach(todo => {
                if (todo.selected) {
                    dispatch(selectTodo(todo.id));
                }
            });
            setSelectAllText('Select All');
        }
    };


    return (
        <div className="task-list-container">
            <ListGroup className="task-list">
                {todos.map(todo => (
                    <ListGroup>
                        <Task key={todo.id} todo={todo} />
                        <span style={{margin:'8px 0px'}} />
                    </ListGroup>
                ))}
            </ListGroup>
            <div style={{ display: 'flex', gap: '20px' }}>
                {anySelected && (
                    <button className='task-select' onClick={handleSelectAll}>{selectAllText}</button>
                )}
                {anySelected && (
                    <button className='task-delete' onClick={handleDeleteSelected}>Delete Selected</button>
                )}
            </div>
        </div>
    );
};

export default TaskList;
