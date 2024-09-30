import { createSlice, nanoid } from "@reduxjs/toolkit";

// nanoid genrate unique id

const initialState = {
  todos: [
    {
      id: 1,
      text: "hello world",
    },
  ],
};
// context api mai aur redux toolkit mai ye diffrence h ki context api mai hum eha method create krete thai aur functionality hum app.js mai likhte thai but redux toolkit mai hum function bhi yehi declare krte h aur functionality bhi yehi likhte h
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload, // payload ek object h uske andar kuch bhi hum access kr skte h . ke through
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  }, // reducer aysai hi bante h
});

export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
