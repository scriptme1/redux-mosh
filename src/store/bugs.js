import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import projects from './projects';
//import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';

let lastId = 0;

const slice = createSlice({
  name: 'bugs',
  initialState: [],
  reducers: {
    //action => action handlers
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.findIndex(bug => bug.id === bugId);
      bugs[index].userId = userId;
    },

    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex(bug => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      return bugs.filter(bug => bug.id !== action.payload.id);
    },
  },
});
export const { bugAdded, bugResolved, bugRemoved, bugAssignedToUser } =
  slice.actions;
export default slice.reducer;
//selector function --- gets a state and returns a computed state
// export const getUnresolvedBugs = state =>
//   state.entities.bugs.filter(bug => !bug.resolved);

//Memoization
//bugs => get unresolved bugs from the cache

export const getUnresolvedBugs = createSelector(
  state => state.entities.bugs,
  state => state.entities.projects,
  (bugs, projects) => bugs.filter(bug => !bug.resolved)
);

export const getBugsByUser = userId =>
  createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => bug.userId === userId)
  );

// console.log(slice);
// export const bugAdded = createAction('bugAdded');
// export const bugResolved = createAction('bugResolved');
// export const bugRemoved = createAction('bugRemoved');

//Reducer
// let lastId = 0;

// export default createReducer([], {
//   //key: value
//   //actions : functions (event=>event handler)
//   //redux toolkit uses immer under the hood, this allows us to use the push method
//   //in updating the state instead of using the spread operator
//   // the mutation code that we wrote automatically is translated into immutable (nonmutating) update pattern

//   //we can rename our state to bugs for easier reading

//   //action is an object with properties of type and payload
//   [bugAdded.type]: (bugs, action) => {
//     bugs.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolved: false,
//     });
//   },
//   [bugResolved.type]: (bugs, action) => {
//     const index = bugs.findIndex(bug => bug.id === action.payload.id);
//     bugs[index].resolved = true;
//   },

//   [bugRemoved.type]: (bugs, action) => {
//     bugs.filter(bug => bug.id !== action.payload.id);
//   },
// });

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case bugAdded.type:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];

//     case bugRemoved.type:
//       return state.filter(bug => bug.id !== action.payload.id);

//     case bugResolved.type:
//       return state.map(bug =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//       );

//     default:
//       return state;
//   }
// }

//code without redux toolkit

// // Action Types
// const BUG_ADDED = 'bugAdded';
// const BUG_REMOVED = 'bugRemoved';
// const BUG_RESOLVED = 'bugResolved';

// // Actions
// export const bugAdded = description => ({
//   type: BUG_ADDED,
//   payload: {
//     description: description,
//   },
// });

// export const bugResolved = id => ({
//   type: BUG_RESOLVED,
//   payload: {
//     //id: id ---> modern js syntax allows us to shorten the code just as below,
//     id,
//   },
// });

// export const bugRemoved = id => ({
//   type: BUG_REMOVED,
//   payload: {
//     id,
//   },
// });

// let lastId = 0;

// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case BUG_ADDED:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];

//     case BUG_REMOVED:
//       return state.filter(bug => bug.id !== action.payload.id);

//     case BUG_RESOLVED:
//       return state.map(bug =>
//         bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
//       );

//     default:
//       return state;
//   }
// }
