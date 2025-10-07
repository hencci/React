// The first thing it should have is, drumroll, a class! But it cannot be just another class, it will need to have certain properties that qualifies it as a React component. React provides us with all those properties on a class called Component, and we can write our components by extending the given class, as shown below:

import { Component } from "react";

class ClassInput extends Component {
  // Some code goes here
}

/*
  This can also be written as:

  import React from 'react';
  class ClassInput extends React.Component {}
  export default ClassInput;

  instead of destructuring the `Component` during import
*/

export default ClassInput;
