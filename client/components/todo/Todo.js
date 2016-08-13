import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      textInput: ''
    }
  }

  handleChange() {
    let todo = document.getElementById('todo-input')

    this.setState({
      textInput: ''
    });
  }

  render() {
    return (
      <div>
        <input type="text"></input>
        <button></button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    todos: state.todos
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setTodos: null
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);