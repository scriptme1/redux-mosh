import configureStore from './store/configureStore';
import { loadBugs, assignBugToUser } from './store/bugs';

const store = configureStore();
//UI Layer
store.dispatch(loadBugs());
setTimeout(() => store.dispatch(assignBugToUser(1, 3)), 2000);
//store.dispatch(assignBug({ userId: '1', id: '1' }));
//store.dispatch(addBug({ description: 'a' }));
//setTimeout(() => store.dispatch(loadBugs()), 2000);
//setTimeout(() => store.dispatch(loadBugs()), 4000);

// ////////////////////////////////////////////////////////////////////////////////

// store.dispatch({
//   type: 'apiCallBegan',
//   payload: {
//     url: '/bugs',
//     onSuccess: 'bugsReceived',
//     onError: 'apiRequestFailed',
//   },
// });

// import {
//   bugAdded,
//   bugResolved,
//   bugRemoved,
//   getUnresolvedBugs,
//   bugAssignedToUser,
//   getBugsByUser,
// } from './store/bugs';
// import {
//   projectAdded,
//   projectCompleted,
//   projectRemoved,
// } from './store/projects';
// import { userAdded } from './store/users';
// const store = configureStore();

// store.subscribe(() => {
//   console.log('Store Changed!');
// });

// store.dispatch(userAdded({ name: 'User1' }));
// store.dispatch(userAdded({ name: 'User2' }));

// store.dispatch(projectAdded({ name: 'Project 1' }));
// store.dispatch(projectAdded({ name: 'Project 2' }));
// store.dispatch(projectAdded({ name: 'Project 3' }));
// store.dispatch(projectAdded({ name: 'Project 4' }));
// store.dispatch(projectCompleted({ id: 1 }));
// store.dispatch(projectRemoved({ id: 4 }));

// console.log(store.getState());

//Bugs replaced by Projects

// store.dispatch(bugAdded({ description: 'Bug 1' }));
// store.dispatch(bugAdded({ description: 'Bug 2' }));
// store.dispatch(bugAdded({ description: 'Bug 3' }));
// store.dispatch(bugAdded({ description: 'Bug 4' }));
// store.dispatch(bugAssignedToUser({ bugId: 1, userId: 1 }));
// store.dispatch(bugResolved({ id: 1 }));

// store.dispatch(bugRemoved({ id: 4 }));

// const x = getUnresolvedBugs(store.getState());
// const y = getUnresolvedBugs(store.getState());
// console.log(x === y);

// const bugs = getBugsByUser(1)(store.getState());
// console.log(bugs);
//console.log(store.getState());

//Previous Code from Discussion of Redux Concept

// import store from './store';
// import { bugAdded, bugResolved } from './actions';
// const unsubscribe = store.subscribe(() => {
//   console.log('store changed!', store.getState());
// });
//subscribe method returns a function for unsubscribing to the store

//store.dispatch(bugAdded('Bug 1'));

//unsubscribe();
// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });

// store.dispatch(bugResolved(1));
// console.log(store.getState());
