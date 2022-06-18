//core concepts in redux

//Redux -- a State Management Library for Javascript Apps, we can use it for vanilla Js, React, Vue , Angular and many other js library

//redux architecture
//In redux we store our application state inside a single Javascript object called Store
//this object(Store) is our single source of truth for our application state
//We cannot directly modify or mutate this store... hence we use ...spread operator and make a copy
//or we use a javascript library like Immer or Immutable
//Redux is built on top of functional programming principles
//In functional programming we do not mutate state

// store.currentUser = { name: 'Mosh' }; this is not allowed since store is an immutable object
//to Update the store we should create a function to update it

function reducer(store) {
  //return updated store
  const updated = { ...store };
}

//store single javascript object that holds the application state

// a reducer is a function that accepts the current instance of store
//and returns the updated store
//responsible for updating a specific slice of the store
//Also like a event handler or processors
// Reducers are pure functions, they dont mutate or touch the global state
//only get the current instance and return the updated one

// an action is a js object that describes what just happened
//example user add an item to his cart
//we should give the reducer an action as a second parameter
//based on the type of action the reducer will know which property
//of the store to update
// can be renamed to event because in programming events represent
//what has happened

// 3 building blocks of redux applications
// Store Action Reducer
//store has a dispatch method that takes an action
// it will then forward this Action to the Reducer
// Reducer will compute the new state and returns it back to the store
//Store will set the state internally and notify the UI about the update
// The UI components will pull up the updated data and refresh themselves based on the updated state

//Steps in Redux

// Create/Design the Store
// Define the Actions
// Create the Reducer/s
