// A class is generally incomplete without a constructor, so let’s add one.

// The props passed into this component are passed to the class’s constructor. This, along with the super method, allows you to use the props in the context of this, which, in this case, refers to the component.

import { Component } from "react";

class ClassInput extends Component {
  constructor(props) {
    super(props);
  }
  // Some more code goes here
}

export default ClassInput;
