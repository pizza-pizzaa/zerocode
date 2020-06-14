import React, { Component} from 'react';
import { Link } from 'react-router-dom';

class Registration extends Component{
    
    render(){
    return ( <div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div class="container text-center">
            <button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
            </button>
            <Link to="/home">
                <a class="navbar-brand logo">ZeroCode</a>
            </Link>
            <header></header>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav ml-auto"></ul>
                <ul class="nav navbar-nav">
                        <li class="nav-item" role="presentation"><a class="nav-link">Register</a></li>
                    <Link to="/login">
                        <li class="nav-item" role="presentation"><a class="nav-link">login</a></li>
                    </Link>
                    <li class="nav-item" role="presentation"></li>
                </ul>
            </div>
        </div>
    </nav>
    <main class="page registration-page">
        <section class="clean-block clean-form dark">
            <div class="container">
                <div class="block-heading">
                    <h2 class="text-info">Registration</h2>
                    <p>Register here to enter the world of Programming!</p>
                </div>
                <form>
                    <div class="form-group"><label for="name">Roll Number</label><input class="form-control item" type="text" id="rollno"/></div>
                    <div class="form-group"><label for="password">Name</label><input class="form-control item" type="text" id="name"/></div>
                    <div class="form-group"><label for="password">Email</label><input class="form-control item" type="email" id="email"/></div>
                    <div class="form-group"><label for="email">Password</label><input class="form-control item" type="password" id="password"/></div>
                    <button class="btn btn-primary btn-block" type="submit">Sign Up</button>
                    </form>
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
                            <li><a>Register</a></li>
                        <Link to="/login">
                            <li><a>Log In</a></li>
                        </Link>
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
    </div>
    )
    }
}

export default Registration;