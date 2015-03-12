import alt from '../alt'
import Actions from '../actions/Actions'

/**
  * This is the flux store that controls the people
  * This stores all of the people in an array
  */
class PersonStore {
  // Initialize the store with binding the store methods to the actions
  constructor() {
    this.bindAction(Actions.addPerson, this.onAddPerson);
    this.bindAction(Actions.deletePerson, this.onDeletePerson);
    // Get the people from localStorage and if they don't exist initialize a example array
    this.people = JSON.parse(localStorage.getItem('people')) || [{name:'Example',desc:'This is an example person.'}];
  }
  // Add person to array and save to localStorage
  onAddPerson(person) {
    this.people.push(person);
    localStorage.setItem('people', JSON.stringify(this.people));
  }
  //  Delete person from array and save to localStorage
  onDeletePerson(index) {
    this.people.splice(index, 1);
    localStorage.setItem('people', JSON.stringify(this.people));
  }
  // Return an object of people
  static getPeople() {
    return {
      people: this.getState().people
    }
  }
}

export default alt.createStore(PersonStore, 'PersonStore')
