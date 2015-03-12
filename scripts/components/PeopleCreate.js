import React from 'react';
import Actions from '../actions/Actions';
import Remarkable from 'remarkable';

// Create new markdown renderer
const md = new Remarkable();

// A simple react if component
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

// Render a form that allows you to create people
/**
  * React component that allows you to create people to add to the list
  * Uses a form to generate the people
  */
export default class PeopleCreate extends React.Component {
  // Initialize the component
  constructor(props) {
    super(props);
    this.state = {person:{name:'',desc:''}}
  }
  // Handle the name changing
  handleName(e) {
    function capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    this.setState({person: {name: capitalize(e.target.value), desc: this.state.person.desc}});
  }
  // Handle the description changing
  handleDesc(e) {
    this.setState({person: {name: this.state.person.name, desc: e.target.value}});
  }
  // Handle the form submit
  handleForm(e) {
    e.preventDefault();
    // Check if both fields are blank
    if(this.state.person.name !== '' && this.state.person.desc !== '') {
      React.findDOMNode(this.refs.name).value = '';
      React.findDOMNode(this.refs.desc).value = '';
      Actions.addPerson(this.state.person);
      this.setState({person:{name:'',desc:''}})
    }
  }
  // Render the component
  render() {
    return (
      <div className='create col-md-8'>
        <h1>Creator</h1>
        <form onSubmit={this.handleForm.bind(this)}>
          <div className="form-group">
            <label>Name</label>
            <input ref='name' type='text' className='form-control' value={this.state.person.name} onChange={this.handleName.bind(this)}/>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea ref='desc' rows='5' className='form-control' value={this.state.person.desc} onChange={this.handleDesc.bind(this)}/>
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
        <If test={this.state.person.name !== '' && this.state.person.desc !== ''}>
          <div className='person'>
            <h2>Preview</h2>
            <p>Name: {this.state.person.name}</p>
            <p>
              Description:
              <div className='description'
                dangerouslySetInnerHTML={{
                  __html: md.render(this.state.person.desc)
                }}>
              </div>
            </p>
          </div>
        </If>
      </div>
    )
  }
}
