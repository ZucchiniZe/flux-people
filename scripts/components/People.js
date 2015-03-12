import React from 'react'
import PeopleList from './PeopleList'
import PeopleCreate from './PeopleCreate'

export default class People extends React.Component {
  render() {
    let flux = this.props.flux
    return (
      <div className='people'>
        <h1>People Wrapper</h1>
        <PeopleList/>
        <PeopleCreate/>
      </div>
    )
  }
}
