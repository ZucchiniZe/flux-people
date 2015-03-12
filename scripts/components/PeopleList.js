import React from 'react';
import Actions from '../actions/Actions';
import PersonStore from '../stores/PersonStore';
import Remarkable from 'remarkable';

// The markdown converter using remarkable
const md = new Remarkable();

/**
  * The react component that lists all the people
  */
export default class PeopleList extends React.Component {
  // Initialize props and state
  constructor(props) {
    super(props);
    this.state = this._getStateFromStore()
  }
  // Get the array from the store by running the static method `getPeople()` on the store
  _getStateFromStore() {
    return PersonStore.getPeople()
  }
  // Set the state when the store changes
  onStoreChange() {
    this.setState(this._getStateFromStore);
  }
  // Listen for changes from the store
  componentDidMount() {
    PersonStore.listen(this.onStoreChange.bind(this));
  }
  // Unlisten for changes from the store
  componentWillUnmount() {
    PersonStore.unlisten(this.onStoreChange.bind(this));
  }
  // Send the delete person action so the person gets delted
  deletePerson(index) {
    Actions.deletePerson(index)
  }
  // Render the actual component
  render() {
    // Map the array to react representation of the data
    var peopleNodes = this.state.people.map((person, i) => {
      return (
        <div className='person' key={i}>
          <p><b>Name:</b> {person.name}</p>
          <p><b>Description:</b> <div className='description' dangerouslySetInnerHTML={{__html: md.render(person.desc)}}></div></p>
          <button className='btn btn-danger' onClick={this.deletePerson.bind(this, i)}>Delete</button>
          <hr/>
        </div>
      )
    });
    // Return the list of people and peopleNodes (the array which we mapped)
    return (
      <div className='list col-md-4'>
        <h1>List</h1>
        {peopleNodes}
      </div>
    )
  }
}
