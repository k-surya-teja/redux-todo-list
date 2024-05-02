import { createSlice } from '@reduxjs/toolkit';

let list;
try {
  list = localStorage.getItem('todos');
} catch (error) {
  console.error('Error retrieving data from local storage:', error);
}

const initialState = {
  todos: list ? JSON.parse(list) : [] ,
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos",JSON.stringify(state.todos));
  },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => !action.payload.includes(todo.id));
      localStorage.setItem("todos",JSON.stringify(state.todos));
    },
    selectTodo: (state, action) => {
      state.todos = state.todos.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            selected: !todo.selected,
          };
        }
        return todo;
      });
    },
    selectAllTodos: state => {
      state.todos.forEach(todo => {
        todo.selected = true;
      });
    },
    editTodo: (state, action) => {
      const todoToEdit = state.todos.find(todo => todo.id === action.payload.id);
      if (todoToEdit) {
        todoToEdit.title = action.payload.title;
      }
      localStorage.setItem("todos",JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, deleteTodo, selectTodo, selectAllTodos, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
