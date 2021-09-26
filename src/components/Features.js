import React, { useState } from 'react'
import Buttons from './Buttons'
import Labels from './Labels'
import Typography from './Typography'
import Circular from './Circular'
import FancyBoxes from './FancyBoxes'
import Misce from './Misce'

function Features() {
    const [feature, setFeature] = useState(1)
    return (
        <div className="pages1">
            <div className="features">
                <div className="features__left">
                    <br />
                    <span className="subtitle center">Feature List</span>
                    <ul>
                        <li onClick={() => setFeature(1)}>Buttons</li>
                        <li onClick={() => setFeature(2)}>labels</li>
                        <li onClick={() => setFeature(3)}>Typography</li>
                        <li onClick={() => setFeature(4)}>Miscellenous</li>
                        {/* <li onClick={() => setFeature(4)}>Circular</li>
                        <li onClick={() => setFeature(5)}>fancy-boxes</li> */}
                    </ul>
                </div>
                <div className="features__right">
                    {feature === 1 && <Buttons />}
                    {feature === 2 && <Labels />}
                    {feature === 3 && <Typography />}
                    {feature === 4 && <Misce /> }
                    {feature === 5 && <FancyBoxes />}
                </div>
            </div>
        </div>
    )
}

export default Features
