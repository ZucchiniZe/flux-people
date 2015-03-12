import alt from '../alt'
import Actions from '../actions/Actions'

class PersonStore {
  constructor() {
    this.bindAction(Actions.addPerson, this.onAddPerson)
    this.people = [{name:'Example',desc:'This is an example person.'}];
  }
  onAddPerson(person) {
    this.people.push(person);
  }
  static getPeople() {
    return {
      people: this.getState().people
    }
  }
}

export default alt.createStore(PersonStore, 'PersonStore')
