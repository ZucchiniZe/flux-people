import React from 'react';
import Actions from '../actions/Actions';
import PersonStore from '../stores/PersonStore';
import Remarkable from 'remarkable';

const md = new Remarkable();

// Render a list of people
export default class PeopleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._getStateFromStore()
  }
  _getStateFromStore() {
    return PersonStore.getPeople()
  }
  onStoreChange() {
    this.setState(this._getStateFromStore);
  }
  componentDidMount() {
    PersonStore.listen(this.onStoreChange.bind(this));
  }
  componentWillUnmount() {
    PersonStore.unlisten(this.onStoreChange.bind(this));
  }
  deletePerson(i) {
    Actions.deletePerson(i)
  }
  render() {
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
    return (
      <div className='list col-md-4'>
        <h1>List</h1>
        {peopleNodes}
      </div>
    )
  }
}
