{
  /*   What are reducers?   */
}

// Reducers are pure functions that take a previous state and an action to return a new state.

// The action is an object with a type property describing what the user did. This object can also contain any other properties that our reducer might need to produce the new state.

/* We can define a reducer that updates the state of a counter like this: */
function reducer(state, action) {
  switch (action.type) {
    case "incremented_count": {
      return { count: state.count + 1 };
    }
    case "decremented_count": {
      return { count: state.count - 1 };
    }
    case "set_count": {
      return { count: action.value };
    }
    default: {
      throw new Error("unknown action: " + action.type);
    }
  }
}

// Remember, reducers are pure functions so we shouldn’t mutate the state.
