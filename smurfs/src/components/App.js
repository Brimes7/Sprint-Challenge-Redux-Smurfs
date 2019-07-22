import React, { Component } from 'react';
import{connect} from 'react-redux';
import './App.css';

import{getSmurfs, addSmurf, deleteSmurf} from '../actions';
class App extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount () {
    this.props.getSmurfs()
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  addSmurf = e => {
    e.preventDefault()
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    this.props.addSmurf(newSmurf)
    this.setState({
      name: '',
      age: '',
      height: ''
    })
  }

  deleteSmurf = id => {
    this.props.deleteSmurf(id)
  }

  render () {
    return (
      <div className='App'>
        <h1>Smurfs Village 2.0 - Redux</h1>
        {this.props.smurfs.map(smurf => {
          return (
            <div>
              <h3>{smurf.name}</h3>
              <p>{smurf.age}</p>
              <p>{smurf.height}</p>
              <button onClick={() => this.deleteSmurf(smurf.id)}>DELETE</button>
            </div>
          )
        })}
        <form onSubmit={this.addSmurf}>
          <input
            type='text'
            value={this.state.name}
            name='name'
            onChange={this.changeHandler}
            placeholder='name'
          />
          <input
            type='number'
            value={this.state.age}
            name='age'
            onChange={this.changeHandler}
            placeholder='age'
          />
          <input
            type='text'
            value={this.state.height}
            name='height'
            onChange={this.changeHandler}
            placeholder='height'
          />
          <button type='submit'>Add Smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  editMode: state.editMode
})

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf }
)(App);
