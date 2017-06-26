import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const filtered = (todos, filter) => {
  switch (filter) {
    case 'All':
      return todos;
    case 'Active':
      return todos.filter( t => !t.complete )
    case 'Completed':
      return todos.filter( t => t.complete )
  }
}

const List = ({ todos, filter }) => (
  <ul>
    { filtered(todos, filter).map( (t) => <Todo key={t.id} {...t} /> )}
  </ul>
)

const mapStateToProps = (state) => {
  return { todos: state.todos, filter: state.filter }
}

export default connect(mapStateToProps)(List);
