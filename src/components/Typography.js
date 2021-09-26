import React from 'react'

function Typography() {
    return (
        <div>
            <div>
                <p className="subtitle">Text Color Classes</p>
                <p>Strapilicious provides the following Text Color classes</p>
                <p><pre>Example usage className="blue"
                    </pre></p>
            </div>
            <div className="features__grid">
                <div className="typo-box">
                    <p className="typo-label">blue</p>
                    <p className="blue">Blue</p>
                </div>
                <div className="typo-box">
                    <p className="typo-label">red</p>
                    <p className="red">Red</p>
                </div>
                <div className="typo-box">
                    <p className="typo-label">green</p>
                    <p className="green">Green</p>
                </div>
                <div className="typo-box">
                    <p className="typo-label">orange</p>
                    <p className="orange">Orange</p>
                </div>
                <div className="typo-box">
                    <p className="typo-label">pink</p>
                    <p className="pink">Pink</p>
                </div>
                <div className="typo-box">
                    <p className="typo-label">purple</p>
                    <p className="purple">Purple</p>
                </div>
                <div className="typo-box">
                    <p className="typo-label">lbrown</p>
                    <p className="lbrown">Light Brown</p>
                </div>
                <div className="typo-box">
                    <p className="typo-label">black</p>
                    <p className="black">Black</p>
                </div>
                <div className="typo-box">
                    <p className="typo-label">outline</p>
                    <p className="outline">Outline</p>
                </div>
            </div>
        </div>
    )
}

export default Typography
