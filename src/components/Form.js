import React from 'react';
import { connect } from 'react-redux'

class Form extends React.Component {
  state = { name: '' }
  
  onChange = (e) => {
    this.setState({ name: e.target.value })
  }

  submit = (e) => {
    e.preventDefault();
    let { dispatch } = this.props;
    let { name } = this.state;
    dispatch({ type: 'ADD_TODO', todo: name })
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


export default connect()(Form)
