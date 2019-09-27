import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react'
import '../App.css';

class SimpleForm extends Component {
	state = {
		response: '',
		newPost: '',
		returnPost: '',
	}

componentDidMount() {
	this.server = async () => {
		const response = await fetch('/backend');
		const body = await response.json()
		
		if(response.status !== 200) {
			throw Error(body.message)
		}
		return body;
	}
	
	this.submit = async (e) => {
		e.preventDefault();
		const response = await fetch('/newPost', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify({ newPost: this.state.newPost})
		})
		const body = await response.text()
		this.setState({ returnPost: body})
	}
}
	render() {
		return (
		<div className="simple-form">
			<Form onSubmit={this.submit}>
			<Form.Field>
			<h3>Type a random string</h3>
			<input 
				type="text"
				placeholder="Enter a random string"
				className="box"
				onChange={e => this.setState({ newPost: e.target.value })}
				value={this.state.newPost}
			/>
			</Form.Field>
			<Button className="btn">Submit</Button>
			</Form>
			<p>{this.state.returnPost}</p>
			</div>
		)
	}

}

export default SimpleForm;