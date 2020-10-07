import React from 'react';
import axios from 'axios';

export default class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = () => {
        const { email, password } = this.state;

        axios
            .post('/auth/register', { email, password })
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <p>Login!</p>
                <input onChange={this.handleChange} name='email' placeholder='email' />
                <input onChange={this.handleChange} name='password' placeholder='password' />
                <button onClick={this.handleSubmit}>Register</button>
            </div>
        )
    }
}