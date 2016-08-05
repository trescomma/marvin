import React from 'react';
import { RegistrationForm } from 'react-stormpath';

export default class RegistrationPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <RegistrationForm />
      </div>
      )
  }

}