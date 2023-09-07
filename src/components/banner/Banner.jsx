import React, { useRef } from 'react';
import "./banner.css";

export default function Banner({ footerRef }) {
    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const bannerStyle = {
        position: 'relative',
        color: 'white',
        fontSize: '200px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add the box-shadow inline
    };

    return (
        <div className="banner-section" style={bannerStyle}>
            <div className="container">
                <div className="banner-wrapper" style={{ position: 'absolute', bottom: 0, left: 0 }}>
                    <h1 className="banner-heading" style={{ fontSize: '50px', marginBottom: '40px' }}>
                        Yosef Wolday | Software Engineer 
                    </h1>
                    <p className="banner-paragraph">
                        As a healthcare professional who successfully transitioned into software development, I'm incredibly excited to collaborate with fellow engineers and explore future technologies to make a positive impact. Originally on the path to become a Physician Assistant, life led me down a different road, eventually leading me away from direct patient care.
                    </p>
                    <button
                        className="fun-fact-button"
                        onClick={scrollToFooter}
                        style={{
                            position: 'relative',
                            backgroundColor: 'black',
                            color: 'white',
                            padding: '10px 20px',
                            fontSize: '18px',
                            border: 'none',
                            borderRadius: '4px',
                            marginTop: '20px',
                            marginBottom: '30px',
                        }}
                    >
                        Fun Fact About Me
                    </button>
                </div>
            </div>
        </div>
    );
}
