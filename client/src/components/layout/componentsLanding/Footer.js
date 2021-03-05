import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer pink darken-3">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 l6">
                                <h5>About Us</h5>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, eaque libero assumenda quae nostrum facere iure neque, quia ipsam sint nam aut quas soluta officiis. Libero magni molestiae facere asperiores.</p>
                            </div>
                            <div className="col s12 l4 offset-l2">
                                <h5 className="center">Connect</h5>
                                <ul style={{display:"flex",justifyContent:"space-around"}}>
                                    <li><a className="white-text btn-floating btn-small" href="https://www.facebook.com/"><i className="fab fa-facebook pink"></i></a></li>
                                    <li><a className="white-text btn-floating btn-small" href="https://www.instagram.com/"><i className="fab fa-instagram pink"></i></a></li>
                                    <li><a className="white-text btn-floating btn-small" href="https://www.twitter.com/"><i className="fab fa-twitter pink"></i></a></li>
                                    <li><a className="white-text btn-floating btn-small" href="https://www.github.com/"><i className="fab fa-github pink"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <div className="container center-align">&copy; 2020 My Health Pal</div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
