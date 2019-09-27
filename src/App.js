import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    response: '',
    newPost: '',
    returnPost: ''
  }
  
  componentDidMount() {
    this.server()
      .then(res => this.setState({ response: res.message}))
      .catch(err =>  console.log(err))
  }

  server = async () => {
    const response = await fetch('/backend');
    const body = await response.json()
    
    if(response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  }

  submit = async (e) => {
    e.preventDefault();
    const response = await fetch('/newPost', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ newPost: this.state.newPost})
    })
    const body = await response.text()
    this.setState({ returnPost: body})
  }  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Form onSubmit={this.submit}>
          <Form.Field>
          <h2>This is a simple form</h2>
            <label>User Input</label>
            <input 
              type="text"
              onChange={e => this.setState({ newPost: e.target.value })}
              value={this.state.newPost}
            />
          </Form.Field>
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
        <p>{this.state.returnPost}</p>
      </div>
    );
  }
}

export default App;
