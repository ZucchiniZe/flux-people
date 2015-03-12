import React from 'react'
import PeopleList from './PeopleList'
import PeopleCreate from './PeopleCreate'

/**
  * The react component that wraps the
  * `<PeopleList/>` and the `<PeopleCreate/>` components
  */
export default class People extends React.Component {
  render() {
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
