import React from 'react';
import { connect } from 'react-redux';

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey'
  }
}

const Todo = ({ id, name, complete, dispatch }) => (
  <li
    onClick={() => dispatch({ type: 'TOGGLE_TODO', id }) }
    style={ complete ? styles.complete : {} }
  >
    {name}
  </li>
)

export default connect()(Todo)
