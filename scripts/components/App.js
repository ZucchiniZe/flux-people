import React from 'react';
import People from './People'


/**
  * The react component that wraps the whole
  * application in a container for bootstrap
  */
export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <People/>
      </div>
    );
  }
}
