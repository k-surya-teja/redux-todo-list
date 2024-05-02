// Task.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectTodo, editTodo } from '../redux/todoSlice';
import { Edit } from '@mui/icons-material';

const Task = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.title);

  const handleToggleSelect = () => {
    dispatch(selectTodo(todo.id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch(editTodo({ id: todo.id, title: editedText }));
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedText(todo.title);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div>
      <div className="todo-item" style={{border:'1px solid grey',borderRadius:'8px',padding:'10px',width:'100%'}}>
        {!isEditing ? (
          <div style={{justifyContent:'space-between',display:'flex',alignItems:'center'}}>
            <div>
              <span className={todo.selected ? 'todo-text selected-text' : 'todo-text'} onClick={handleToggleSelect}>
                <span style={{ fontSize: '17px' }}>{todo.title}</span>
              </span>
            </div>
            <div>
              <button className='btn btn-transparent' onClick={handleEdit}><Edit /></button>
              <input type="checkbox" className="checkbox" checked={todo.selected} onChange={handleToggleSelect} />

            </div>
          </div>
        ) : (
          <div style={{ gap: '10px' }}>
            <div>
              <input type="text" value={editedText} onChange={handleChange} />
            </div>
            <br />
            <div>
              <button className='btn btn-info' onClick={handleSaveEdit}>Save</button>
              <button className='btn btn-secondary' style={{marginLeft:'10px'}} onClick={handleCancelEdit}>Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
