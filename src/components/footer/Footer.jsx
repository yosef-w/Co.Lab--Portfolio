import React from 'react';
import './footer.css';

export default function Footer() {
    return (
        <div className="footer" style={{ paddingTop: '50px', marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="container">
                <div className="footer-wrapper" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className='logo'>
                        <h3 className='footer-title' style={{ maxWidth: '400px', fontSize: '20px', textAlign: 'left' }}>
                            Confidence and community through collaboration
                        </h3>
                    </div>
                    <div className="footer-icons">
                        {/* Placeholder social media icons with margin */}
                        <a href="#" className="social-icon" style={{ marginRight: '10px' }}>
                            <i className="fab fa-facebook fa-2x"></i> {/* fa-2x makes the icon bigger */}
                        </a>
                        <a href="#" className="social-icon" style={{ marginRight: '10px' }}>
                            <i className="fab fa-twitter fa-2x"></i> {/* fa-2x makes the icon bigger */}
                        </a>
                        <a href="#" className="social-icon" style={{ marginRight: '10px' }}>
                            <i className="fab fa-instagram fa-2x"></i> {/* fa-2x makes the icon bigger */}
                        </a>
                        <a href="#" className="social-icon" style={{ marginRight: '10px' }}>
                            <i className="fab fa-linkedin fa-2x"></i> {/* fa-2x makes the icon bigger */}
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-wrapper">
                <div className="small footer-small">
                    Yosef Wolday © 2023.
                </div>
            </div>
        </div>
    );
}
