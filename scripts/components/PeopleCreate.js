import React from 'react';
import Actions from '../actions/Actions';
import PersonStore from '../stores/PersonStore';

class If extends React.Component {
  render() {
    if (this.props.test) {
       return this.props.children;
     }
     else {
       return false;
     }
  }
}

export default class PeopleCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {person:{name:'',desc:''}}
  }
  handleName(e) {
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    this.setState({person: {name: capitalize(e.target.value), desc: this.state.person.desc}});
  }
  handleDesc(e) {
    this.setState({person: {name: this.state.person.name, desc: e.target.value}});
  }
  handleForm(e) {
    e.preventDefault();
    if(this.state.person.name !== '' && this.state.person.desc !== '') {
      React.findDOMNode(this.refs.name).value = '';
      React.findDOMNode(this.refs.desc).value = '';
      Actions.addPerson(this.state.person);
      this.setState({person:{name:'',desc:''}})
    }
  }
  render() {
    return (
      <div className='create'>
        <h3>Person Creator</h3>
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
        <If test={this.state.person.name !== '' && this.state.person.desc !== ''}>
          <div className='person'>
            <h4>Preview</h4>
            <p>Name: {this.state.person.name}</p>
            <p>Description: {this.state.person.desc}</p>
          </div>
        </If>
      </div>
    )
  }
}
