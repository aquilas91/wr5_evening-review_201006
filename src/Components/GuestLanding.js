import React from 'react';
import Login from './Login';
import Register from './Register';

export default class GuestLanding extends React.Component {
    constructor() {
        super();
        this.state = {
            view: 'register'
        }
    }

    handleViewChange = (view) => {
        this.setState({ view })
    }

    render() {
        const { view } = this.state;

        return (
            <section>
                <p onClick={() => this.handleViewChange('register')}>Register</p>
                <p onClick={() => this.handleViewChange('login')}>Login</p>
                {
                    view === 'register'
                        ? <Register />
                        : <Login />
                }
            </section>
        )
    }
}