import { createSlice } from '@reduxjs/toolkit';

const exerciseSlice = createSlice({
  name: 'exercises',
  initialState: [],
  reducers: {
    addExercise: (state, action) => {
      state.push(action.payload);
    },
    deleteExercise: (state, action) => {
      state.splice(action.payload, 1);
    }
  }
});

export const { addExercise, deleteExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;