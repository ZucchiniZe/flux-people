import React from 'react';
import Actions from '../actions/Actions';
import PersonStore from '../stores/PersonStore';

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
  render() {
    var peopleNodes = this.state.people.map(person => {
      return (
        <div className='person' key={person.name}>
          <p>Name: {person.name}</p>
          <p>Description: {person.desc}</p>
          <hr/>
        </div>
      )
    });
    return (
      <div className='list'>
        <h3>People List</h3>
        {peopleNodes}
      </div>
    )
  }
}
