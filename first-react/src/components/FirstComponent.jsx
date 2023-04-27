//rafce TAB
import React from 'react'
import SecondComponent from './SecondComponent'

const FirstComponent = (props) => {
  return (
    <div>
        <h1>Hello {props.firstName} {props.lastName} from FirstComponent</h1>
        <SecondComponent firstName={props.firstName}/>
    </div>
  )
}

export default FirstComponent