import React from 'react';
import { connect } from 'react-redux';
import { incId } from '../actions/nextId';
import { addTodo } from '../actions/todos';

class Form extends React.Component {
  state = { name: '' }
  
  onChange = (e) => {
    this.setState({ name: e.target.value })
  }

  submit = (e) => {
    e.preventDefault();
    let { dispatch, id } = this.props;
    let { name } = this.state;
    let todo = { id, name, complete: false }
    dispatch(addTodo(todo))
    dispatch(incId())
    this.setState({ name: '' })
  }

  render() {
    let { name } = this.state;
    return (
      <form onSubmit={this.submit}>
        <input 
          placeholder="add todo"
          value={name}
          onChange={this.onChange}
        />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(Form)






