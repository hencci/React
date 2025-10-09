{
  /*render() */
}

// The render function is the most used lifecycle method. It is the only required lifecycle method in a class component. It runs on mount and update of a component. Render should be pure, meaning it doesn’t modify component state, returns the same thing each time it’s called (given the same inputs), and doesn’t directly interact with the browser.

{
  /*componentDidMount() */
}

// This method is run after the component is mounted (inserted in the DOM tree). You should make any calls to fetch data that is needed for the component here. It is also a good place to do anything that is reliant on the component, such as fetching from an API.

{
  /*componentDidUpdate() */
}

// This method is run after a component re-renders. Because of this, you have to be careful about what you update in this method, as if you’re updating state indiscriminately, a re-render is caused, and you’ll end up in an endless loop. You can avoid this issue by using conditional statements about the equality of previous and current props when updating state.

// In this method you should be updating anything that needs to be changed in response to either the DOM changing, or any states that you might want to act on upon change. For example, you’d want to refetch user data if the user changes.

{
  /*componentWillUnmount() */
}

// This is the last lifecycle method, which is called before a component is unmounted and destroyed. In this method you should be performing cleanup actions, so that would be cancelling network requests, clearing timers, etc.
