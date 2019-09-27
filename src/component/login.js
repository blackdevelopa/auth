/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { loginUser } from '../loginActions'
import logo from '../login.svg';
import '../App.css';
import SimpleForm from './simpleForm';

export class Login extends Component {
  constructor() {
    super();
    this.state={
    response: '',
    newPost: '',
    returnPost: '',
    username: '',
    email: '',
    password: ''
  }
}
    
  componentDidUpdate() {
    const {isLoggedIn, history} = this.props;
    if(isLoggedIn) {
      history.push('/dashboard')
    }
    }
  
    onLoginSubmit = () => {
    const { loginUser } = this.props;

    const userData = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    }
  
      loginUser(userData)
    }
  
    render() {
      return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
            <div className="App-body">
              <SimpleForm />
              <Form onSubmit={this.onLoginSubmit} className="loginStyle">
                <Form.Field>
                  <h3>Login to see your dashboard</h3>
                  <div className="login-box">
                    <input 
                      type="text"
                      placeholder="Enter your username"
                      onChange={e => this.setState({ username: e.target.value })}
                      value={this.state.username}
                      required
                      className="box"
                    />
                    <input
                      type="email"
                      onChange={e => this.setState({ email: e.target.value })}
                      value={this.state.email}
                      placeholder="Enter your email"
                      required
                      className="box"
                    />
                    <input
                      type="text"
                      placeholder="Enter your password"
                      onChange={e => this.setState({ password: e.target.value })}
                      value={this.state.password}
                      name="password"
                      className="box"
                    />
                  </div>
                </Form.Field>
                <Button type="submit" className="btn">Login</Button>
              </Form>
            </div>
          </div>
      );
    }
  }
  
  const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
  })
  
  export default connect(mapStateToProps, {loginUser})((Login));
  