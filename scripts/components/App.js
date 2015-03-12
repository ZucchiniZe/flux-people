import React from 'react';
import People from './People'


// The initial application
export default class App extends React.Component {
  render() {
    return (
      <div className="container">
        <People/>
      </div>
    );
  }
}
