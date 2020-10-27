import React from 'react'
import './Footer.css';
function Footer() {
    return (
        <div className="container">
            <footer className="footer-class">
                <div className="new-footer">
                    <div className="row">
                        <div className="row-a">
                            <h3 className="new-heading">About Catalog-Z</h3>
                            <p>Catalog-Z is free <a href="/">Bootstrap 5</a> Alpha 2 HTML Template for video and photo websites. 
                                You can freely use this TemplateMo layout for a front-end integration with any kind of CMS website.</p>
                        </div>
                        <div className="row-b">
                            <h3 className="header">Our links</h3>
                            <ul className="new-link">
                                <li>
                                    <a href="#">Advertise</a>
                                </li>
                                <li>
                                <a href="#">Support</a>
                                </li>
                                <li>
                                <a href="#">Our company</a>
                                </li>
                                <li>
                                <a href="#">contact</a>
                                </li>
                            </ul>
                        </div>
                        <div className="row-c">
                            <ul className="main-link">
                                <li className="optional-link">
                                    <a href="https://facebook.com">
                                        <i class="fab-fa-facebook"></i>
                                    </a>
                                </li>
                                <li className="optional-link">
                                    <a href="https://twitter.com">
                                        <i class="fab-fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="optional-link">
                                    <a href="https://instagram.com">
                                        <i class="fab-fa-instagram"></i>
                                    </a>
                                </li>
                                <li className="optional-link">
                                    <a href="https://pinterest.com">
                                        <i class="fab-fa-pinterest"></i>
                                    </a>
                                </li>

                            </ul>
                            <a href="#" className="link-a">Terms of use</a>
                            <a href="#" className="link-a">Privacy policy</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-link">
                            "Copyright 2020 Catalog-Z Company.All rights reserved"
                        </div>
                        <div className="output-link">
                            "Designed by" <a href="https://templatemo.com">TemplateMo</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer

  

