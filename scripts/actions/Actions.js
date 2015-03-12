import alt from '../alt'

// Define the actions for adding people
class Actions {
  addPerson(person) {
    this.dispatch(person);
  }
  deletePerson(index) {
    this.dispatch(index);
  }
}

export default alt.createActions(Actions);
