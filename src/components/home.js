import React, { Component} from 'react';
import { Link } from 'react-router-dom';
class Home extends Component{
    
    render(){
    return ( <div>
    <nav class="navbar navbar-light navbar-expand-lg fixed-top bg-white clean-navbar">
        <div class="container text-center"><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button><a class="navbar-brand logo">ZeroCode</a>
            <header></header>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav ml-auto"></ul>
                <ul class="nav navbar-nav">
                    <Link to="/registration">
                        <li class="nav-item" role="presentation"><a class="nav-link">Register</a></li>
                    </Link>
                    <Link to="/login">
                        <li class="nav-item" role="presentation"><a class="nav-link">login</a></li>
                    </Link>
                    <li class="nav-item" role="presentation"></li>
                </ul>
            </div>
        </div>
    </nav>
    <main class="page">
        <section class="clean-block about-us">
            <div class="container">
                <div class="block-heading">
                    <h2 class="text-info">Welcome!</h2>
                    <p>This is a coding platform exclusively for PSG College of Technology!</p>
                    <p></p>
                </div>
                <div class="row justify-content-center">
                    <div class="col-sm-6 col-lg-4">
                        <div class="card clean-card text-center">
                            <div class="card-body info">
                                <h4 class="card-title">Prashanth N</h4>
                                <p class="card-text">The legend behind the idea of this website</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="card clean-card text-center">
                            <div class="card-body info">
                                <h4 class="card-title">Balaji R</h4>
                                <p class="card-text">MEAN Stack Developer<br/>Blockchain App Developer<br/>Mobile Application Developer</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4">
                        <div class="card clean-card text-center">
                            <div class="card-body info">
                                <h4 class="card-title">Ranjith T</h4>
                                <p class="card-text">Keen interest in Artificial Intelligence and Smart home environment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <footer class="page-footer dark">
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h5>Get started</h5>
                    <ul>
                        <li><a>Home</a></li>
                        <Link to="/registration">
                            <li><a>Register</a></li>
                        </Link>
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
                        <li><a  >FAQ</a></li>
                        <li><a  >Help desk</a></li>
                        <li><a  >Forums</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>Legal</h5>
                    <ul>
                        <li><a  >Terms of Service</a></li>
                        <li><a  >Terms of Use</a></li>
                        <li><a  >Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>© ZeroCode</p>
        </div>
    </footer>
    </div>
    )}
}

export default Home;