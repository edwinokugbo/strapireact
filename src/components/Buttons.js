import React from 'react'

function Buttons() {
    return (
        <div>
            <div>
                <p className="subtitle">Button Classes</p>
                <p>Strapilicious provides the following button classes</p>
                <p><pre>Example usage className="butt-blue"
                    </pre></p>
            </div>
            <div className="features__grid">
                <div className="butt-box">
                    <p className="butt-label">butt-blue</p>
                    <button className="butt-blue">Blue</button>
                </div>
                <div className="butt-box">
                    <p className="butt-label">butt-red</p>
                    <button className="butt-red">Red</button>
                </div>
                <div className="butt-box">
                    <p className="butt-label">butt-green</p>
                    <button className="butt-green">Green</button>
                </div>
                <div className="butt-box">
                    <p className="butt-label">butt-orange</p>
                    <button className="butt-orange">Orange</button>
                </div>
                <div className="butt-box">
                    <p className="butt-label">butt-pink</p>
                    <button className="butt-pink">Pink</button>
                </div>
                <div className="butt-box">
                    <p className="butt-label">butt-purple</p>
                    <button className="butt-purple">Purple</button>
                </div>
                <div className="butt-box">
                    <p className="butt-label">butt-lbrown</p>
                    <button className="butt-lbrown">Light Brown</button>
                </div>
                <div className="butt-box">
                    <p className="butt-label">butt-black</p>
                    <button className="butt-black">Black</button>
                </div>
                <div className="butt-box">
                    <p className="butt-label">butt-grey</p>
                    <button className="butt-grey">Grey</button> 
                </div>
                <div className="butt-box">
                    <p className="butt-label">butt-outline</p>
                    <button className="butt-outline">Outline</button>
                </div>
            </div>
        </div>
    )
}

export default Buttons
