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

// RSeducers are pure functions so we shouldn’t mutate the state.

{
  /*    When to use reducers?    */
}

// If a component only needs to update its state in a couple of simple ways, you don’t need to use reducers. The opposite can be said when a component has become too big, hard to read or debug because of its state logic.

// By using reducers, we can separate the state logic and even store it in a different file or directory, leading to smaller components that are easier to read.

// Since reducers use actions, we can easily track any state-related bugs back to the dispatched action, and because our reducers are just pure functions, we can test them in isolation.

{
  /*    The useReducer hook    */
}

// React allows us to use reducers in our components through a hook called useReducer. This hook takes a reducer function and an initial state as arguments, then returns an array with two values: the current state and a dispatch function.

// This dispatch function receives an action object as argument, which is passed to our reducer function and the returned value from it is used to update the state.

const [state, dispatch] = useReducer(reducer, { count: 0 });

function handleClick() {
  dispatch({ type: "incremented_count" });
}

// Similarly to how React updates state with the set function in useState, React only updates the state in the next render after calling the dispatch function.
