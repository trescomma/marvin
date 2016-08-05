import React from 'react';
import { LoginForm } from 'react-stormpath';

export default class LoginPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <LoginForm />
      </div>
      )
  }

}