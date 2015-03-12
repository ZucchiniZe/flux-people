import alt from '../alt'
import Actions from '../actions/Actions'

class PersonStore {
  constructor() {
    this.bindActions(Actions)
    this.people = [{name: 'Alex Bierwagen', desc: 'A awesome person'}];
  }
  onAddPerson(person) {
    this.people.push(person);
  }
  static getPeople() {
    return this.getState().people;
  }
}

export default alt.createStore(PersonStore, 'PersonStore')
