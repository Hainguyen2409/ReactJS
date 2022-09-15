import React from 'react';
import Home from './Home';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogIn: false
        };
    }

    handleLogin = () => {
        this.setState({ isLogIn: true })
    }

    handleLogOut = () => {
        this.setState({ isLogIn: false })
    }

    render() {
        const { isLogIn } = this.state
        if (isLogIn) return (<Home onLogOut = { this.handleLogOut } />)

        return (
            <div style={{ textAlign: 'center' }}>
                <div>
                    <h1>Please Log In</h1>
                    <button onClick={this.handleLogin}>Login</button> 
                </div>
            </div>
        )
    }
}

export default Login;