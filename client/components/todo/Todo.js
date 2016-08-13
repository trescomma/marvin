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
  }

  addTodo(todo) {
    this.setState({
      todos: this.state.todos.concat(todo)
    })

    //Sets text input back to blank
    document.getElementById('todo-input').value = '';
  }

  render() {
    return (
      <div>
        <input id="todo-input" type="text" onChange={ this.handleChange.bind(this) }></input>
        <button onClick={ this.addTodo.bind(this, this.state.textInput) }>Add Task</button>
        <div>
          <h3>Todos</h3>
          <div>
            {
              this.state.todos.map(todo => <div> { todo } </div>)
            }
          </div>
        </div>
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