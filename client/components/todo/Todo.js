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
    let todo = document.getElementById('todo-input').value;

    this.setState({
      textInput: todo
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <input id="todo-input" type="text" onChange={this.handleChange.bind(this)}></input>
        <button>Add Task</button>
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