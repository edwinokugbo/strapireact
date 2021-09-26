import React from 'react'

function Labels() {
    return (
        <div>
            <div>
                <p className="subtitle">Label Classes</p>
                <p>Strapilicious provides the following label classes</p>
                <p><pre>Example usage className="label-blue"
                    </pre></p>
            </div>
            <div className="features__grid">
                <div className="label-box">
                    <p className="label-label">label-blue</p>
                    <label className="label-blue">Blue</label>
                </div>
                <div className="label-box">
                    <p className="label-label">label-red</p>
                    <label className="label-red">Red</label>
                </div>
                <div className="label-box">
                    <p className="label-label">label-green</p>
                    <label className="label-green">Green</label>
                </div>
                <div className="label-box">
                    <p className="label-label">label-orange</p>
                    <label className="label-orange">Orange</label>
                </div>
                <div className="label-box">
                    <p className="label-label">label-pink</p>
                    <label className="label-pink">Pink</label>
                </div>
                <div className="label-box">
                    <p className="label-label">label-purple</p>
                    <label className="label-purple">Purple</label>
                </div>
                <div className="label-box">
                    <p className="label-label">label-lbrown</p>
                    <label className="label-lbrown">Light Brown</label>
                </div>
                <div className="label-box">
                    <p className="label-label">label-black</p>
                    <label className="label-black">Black</label>
                </div>
                <div className="label-box">
                    <p className="label-label">label-outline</p>
                    <label className="label-outline">Outline</label>
                </div>
            </div>
        </div>
    )
}

export default Labels
