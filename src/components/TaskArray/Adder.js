import { createSlice } from "@reduxjs/toolkit";

const adderSlice = createSlice({
  name: "Adder",
  initialState: {
    todo: {
      array: [],
      detectName: "",
    },
  },
  reducers: {
    TodoItemAdder: (state, { payload }) => {
      state.todo.array.push({
        date: payload.time,
        name: payload.name,
        priorityColor: payload.color,
        energyCost: payload.cost,
        complated: payload.complated,
        id: payload.id,
      });
    },
    nameGenerator: (state, { payload }) => {
      state.todo.detectName = payload.detectName;
    },
    removingTasks: (state, { payload }) => {
      state.todo.array = payload.remove;
    },
    addingTime: (state,{payload}) => {
      state.todo.array.map((item) => item.date = payload.time)
    }
  },
});
export const { TodoItemAdder, nameGenerator, removingTasks, addingTime } =
  adderSlice.actions;
export default adderSlice.reducer;
