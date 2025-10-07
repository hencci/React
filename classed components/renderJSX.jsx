{
  /*--- How you can render JSX ---*/
}

// Now that the props can be accessed inside of the class component, the next issue is to find a way to render the JSX.

// Well, you can do that by returning your JSX from a render method! You can use the props that you declared in the constructor too!

import { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);
  }
  // Some more code goes here

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        {/* The input field to enter Todos */}
        <form>
          <label htmlFor="task-entry">Enter a task: </label>
          <input type="text" id="task-entry" name="task-entry" />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        {/* The list of all the Todos, displayed */}
        <ul></ul>
      </section>
    );
  }
}

export default ClassInput;
