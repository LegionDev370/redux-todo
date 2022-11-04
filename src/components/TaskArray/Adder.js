import { createSlice } from "@reduxjs/toolkit";

const adderSlice = createSlice({
  name: "Adder",
  initialState: {
    todo: [],
    energyCost: {},
    priorityColor: "",
    detectName: "",
  },
  reducers: {
    TodoItemAdder: (state, { payload }) => {
      state.todo.push({
        date: "",
        name: payload.name,
        complated: payload.complated,
        id: payload.id,
        extraDays: "",
      });
    },
    nameGenerator: (state, { payload }) => {
      state.detectName = payload.detectName;
    },
    removingTasks: (state, { payload }) => {
      state.todo = payload.remove;
    },
    addingTime: (state, { payload }) => {
      state.todo.map((item) => {
        item.date = payload.time
        item.extraDays = payload.id
      });
    },
    energyCost: (state, { payload }) => {
      state.energyCost = payload.energy;
    },
    setColor: (state, { payload }) => {
      state.priorityColor = payload.detectingColor;
    },
  },
});
export const {
  TodoItemAdder,
  nameGenerator,
  removingTasks,
  addingTime,
  energyCost,
  setColor,
} = adderSlice.actions;
export default adderSlice.reducer;
