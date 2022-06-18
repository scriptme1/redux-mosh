import { createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
  name: 'projects',
  initialState: [],
  reducers: {
    //action => action handlers
    projectAdded: (projects, action) => {
      projects.push({
        id: ++lastId,
        name: action.payload.name,
        completed: false,
      });
    },
    projectCompleted: (projects, action) => {
      const index = projects.findIndex(
        project => project.id === action.payload.id
      );
      projects[index].completed = true;
    },
    projectRemoved: (projects, action) => {
      return projects.filter(project => project.id !== action.payload.id);
    },
  },
});
export const { projectAdded, projectCompleted, projectRemoved } = slice.actions;
export default slice.reducer;
