import React from 'react';
import Actions from '../actions/Actions';
import PersonStore from '../stores/PersonStore';

export default class PeopleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._getStateFromStore();
  }
  _getStateFromStore() {
    return {
      people: PersonStore.getPeople()
    }
  }
  onStoreChange() {
    console.log(this._getStateFromStore)
    this.setState(this._getStateFromStore);
  }
  componentDidMount() {
    console.log(PersonStore.getState().people)
    PersonStore.listen(this.onStoreChange);
  }
  componentWillUnmount() {
    PersonStore.unlisten(this.onStoreChange);
  }
  render() {
    var peopleNodes = this.state.people.map(person => {
      return (
        <div className='person'>
          <p>Name: {person.name}</p>
          <p>Description: {person.desc}</p>
        </div>
      )
    });
    return (
      <div className='list'>
        <h4>People List</h4>
        <hr/>
      </div>
    )
  }
}
