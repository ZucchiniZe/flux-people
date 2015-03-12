import React from 'react'
import PeopleList from './PeopleList'
import PeopleCreate from './PeopleCreate'

// The wrapper for people
export default class People extends React.Component {
  render() {
    let flux = this.props.flux
    return (
      <div className='people'>
        <h1 style={{textAlign: 'center'}}>People</h1>
        <div className="row">
          <PeopleList/>
          <PeopleCreate/>
        </div>
      </div>
    )
  }
}
