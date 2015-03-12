import React from 'react';
import Actions from '../actions/Actions';
import PersonStore from '../stores/PersonStore';

export default class PeopleCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {person:{name:'',desc:''}}
  }
  onStoreChange() {
    this.setState(this._getStateFromStore());
  }
  componentDidMount() {
    PersonStore.listen(this.onStoreChange);
  }
  componentWillUnmount() {
    PersonStore.unlisten(this.onStoreChange);
  }
  handleName(e) {
    this.setState({person: {name: e.target.value,desc: this.state.person.desc}});
  }
  handleDesc(e) {
    this.setState({person: {name: this.state.person.name, desc: e.target.value}});
  }
  handleForm(e) {
    e.preventDefault();
    // React.findDOMNode(this.refs.name).value = '';
    // React.findDOMNode(this.refs.desc).value = '';
    console.log(this.state.person);
    Actions.addPerson(this.state.person);
  }
  render() {
    return (
      <div className='create'>
        <h4>Person Creator</h4>
        <form onSubmit={this.handleForm.bind(this)}>
          <div className="form-group">
            <label>Name</label>
            <input ref='name' type='text' className='form-control' value={this.state.person.name} onChange={this.handleName.bind(this)}/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea ref='desc' className='form-control' value={this.state.person.desc} onChange={this.handleDesc.bind(this)}/>
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    )
  }
}
