import { Button } from 'bootstrap';
import React from 'react';
import Home from './Home';
import Input from './Input';
import './style.css';

class BootstrapApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {email: "", password: "", isRemember: false},
            isValid: false,
            isLoggedIn: false
        };
    }

    handleChange = (event) => {
        this.setState(() => {
            const {form} = this.state;
            form[event.target.name] = event.target.value;
            return {form}
        }, () => this.checkValidForm())
    }

    handleChangeCheckbox = () => {
        this.setState((state) => {
          const { form } = state
          form.isRemember = !form.isRemember
          return { form }
        }, () => this.checkValidForm())
      }
     
      checkValidForm = () => {
        const { email, password } = this.state.form
        const value = email && password
        this.setState({ isValid: value })
      }
     
      handleSubmit = () => {
        if (this.state.isValid){
          this.setState({ isLoggedIn: true })
        }
      }
     
      handleLogOut = () => {
        this.setState({ isLoggedIn: false })
      }

      render() {
        const { isLoggedIn, form } = this.state
        if (isLoggedIn) return (<Home onLogOut = {this.handleLogOut}/> )
        return (
          <div className="container d-flex align-items-center text-center">
            <div className="form-signin">
              <form>
                <img className="mb-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                alt="" width="72" height= "57" />
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                <div className="form-floating">
                  <Input className="form-control email" type="email" name="email" placeholder="name@example.com" 
                  value={form.email} onChange= {this.handleChange} />
                  <label>Email Address</label> 
                </div>
                <div className="form-floating">
                  <Input className="form-control password" type="password" name="password" placeholder="password" 
                  value={form.password0} onChange= {this.handleChange} />
                  <label>Password</label> 
                </div>
                <div className="checkbox mb-3">
                  <label>
                    <Input type="checkbox" value={form.isRemember} onChange= {this.handleChangeCheckbox} />
                    Remember me
                  </label>
                </div>
                <Button className="w-100 btn btn-primary btn-lg" onClick={this.handleSubmit} type="button">Sign in</Button>
                <p className="mt-5 mb-3 text-muted">© 2017-2021</p>
              </form>
            </div>
          </div>
        )
      }
}

export default BootstrapApp;
