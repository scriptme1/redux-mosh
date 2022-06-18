import * as actions from './actionTypes';

// export const bugAdded = description => {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: description,
//     },
//   };
// };

export const bugAdded = description => ({
  type: actions.BUG_ADDED,
  payload: {
    description: description,
  },
});

export const bugResolved = id => ({
  type: actions.BUG_RESOLVED,
  payload: {
    //id: id ---> modern js syntax allows us to shorten the code just as below,
    id,
  },
});

export const bugRemoved = id => ({
  type: actions.BUG_REMOVED,
  payload: {
    id,
  },
});

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_ADDED,
//     payload: {
//       description: description,
//     },
//   };
// }
