import alt from '../alt'

/**
  * Define the actions to call the store methods by
  */
class Actions {
  addPerson(person) {
    this.dispatch(person);
  }
  deletePerson(index) {
    this.dispatch(index);
  }
}

export default alt.createActions(Actions);
