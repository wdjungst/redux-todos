import React from 'react';
import { connect } from 'react-redux';

const List = ({ todos }) => (
  <ul>
    { todos.map( (t, i) =>
        <li key={i}>
          {t}
        </li>
      )
    }
  </ul>
)

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(List);
