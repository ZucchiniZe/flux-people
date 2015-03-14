import alt from '../alt'

/**
  * Define the actions to call the store methods by
  */
class Actions {
  constructor() {
    this.generateActions('addPerson', 'deletePerson')
  }
}

export default alt.createActions(Actions);
