import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component{

    constructor() {
        super()
        this.state = {
             email:'',
             password:''
        }
    }
    
    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    submitHandler = e => {
        e.preventDefault();
        axios.post('https://zerocode.herokuapp.com/auth',this.state)
             .then( response =>{
                    console.log(response);
             })
             .catch(err =>{
                console.log(err);
             })
    }

    render(){
        const { email, password} = this.state;
    return ( <div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div class="container text-center">
            <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
            </button>
            <Link to="/">
                <a class="navbar-brand logo">ZeroCode</a>
            </Link>
            <header></header>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav ml-auto"></ul>
                <ul class="nav navbar-nav">
                    <Link to="/registration">
                        <li class="nav-item" role="presentation"><a class="nav-link">Register</a></li>
                    </Link>
                        <li class="nav-item" role="presentation"><a class="nav-link">login</a></li>
                    <li class="nav-item" role="presentation"></li>
                </ul>
            </div>
        </div>
    </nav>
    <main class="page login-page">
        <section class="clean-block clean-form dark">
            <div class="container">
                <div class="block-heading">
                    <h2 class="text-info">Log In</h2>
                    <p>Login to enter the world of Programming!</p>
                </div>
                <form onSubmit={ this.submitHandler }>
                    <div class="form-group"><label for="email">Email</label>
                        <input class="form-control item" type="email" name="email" value={email} onChange={this.changeHandler} /></div>
                    <div class="form-group"><label for="password">Password</label>
                        <input class="form-control" type="password" name="password" value={password} onChange={this.changeHandler}/></div>
                    <div class="form-group">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="checkbox"/>
                            <label class="form-check-label" for="checkbox">Remember me</label></div>
                    </div><button class="btn btn-primary btn-block" type="submit">Log In</button></form>
            </div>
        </section>
    </main>
    <footer class="page-footer dark">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h5>Get started</h5>
                    <ul>
                        <Link to="/">
                            <li><a>Home</a></li>
                        </Link>
                        <Link to="/registration">
                            <li><a>Register</a></li>
                        </Link>
                        <li><a>Log In</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>About us</h5>
                    <ul>
                        <li><a>Developers Information</a></li>
                        <li><a>Contact us</a></li>
                        <li><a>Reviews</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>Support</h5>
                    <ul>
                        <li><a>FAQ</a></li>
                        <li><a>Help desk</a></li>
                        <li><a>Forums</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>Legal</h5>
                    <ul>
                        <li><a>Terms of Service</a></li>
                        <li><a>Terms of Use</a></li>
                        <li><a>Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>© ZeroCode</p>
        </div>
    </footer>
    </div>)
    }
}

export default Login;