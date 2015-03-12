import alt from '../alt'

class Actions {
  addPerson(person) {
    this.dispatch(person)
  }
}

export default alt.createActions(Actions);
