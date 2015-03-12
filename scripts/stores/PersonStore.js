import alt from '../alt'
import Actions from '../actions/Actions'

// The store for people
// This stores all of the people in an array
class PersonStore {
  constructor() {
    this.bindAction(Actions.addPerson, this.onAddPerson);
    this.bindAction(Actions.deletePerson, this.onDeletePerson);
    this.people = JSON.parse(localStorage.getItem('people')) || [{name:'Example',desc:'This is an example person.'}];
  }
  onAddPerson(person) {
    this.people.push(person);
    localStorage.setItem('people', JSON.stringify(this.people));
  }
  onDeletePerson(index) {
    this.people.splice(index, 1);
    localStorage.setItem('people', JSON.stringify(this.people));
  }
  static getPeople() {
    return {
      people: this.getState().people
    }
  }
}

export default alt.createStore(PersonStore, 'PersonStore')
