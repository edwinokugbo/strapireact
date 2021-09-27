import React from 'react'
import recentImg01 from '../img/posts/adorable-adult-boys-brothers-341378.jpg'
import recentImg02 from '../img/posts/woman-carrying-baby-2162084.jpg'
import recentImg03 from '../img/posts/family-walking-on-path-1682497.jpg'
import recentImg04 from '../img/posts/girl-and-woman-sitting-on-brown-rock-1096352.jpg'
import recentImg05 from '../img/posts/man-standing-beside-his-wife-teaching-their-child-how-to-1128318.jpg'

function Rightsidebar() {
    return (
        <div className="right__sidebar">
        <h3>Recent Articles</h3>
        <hr />
        <div className="recent__posts">
            <img src={recentImg01} alt="" /> 
            <h4 className="subtitle">Marvel Realeases What If Episode 7</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <hr className="highlight__rule" />
        <div className="recent__posts">
            <img src={recentImg02} alt="" /> 
            <h4 className="subtitle">Marvel Realeases What If Episode 7</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <hr className="highlight__rule" />
        <div className="recent__posts">
            <img src={recentImg03} alt="" /> 
            <h4 className="subtitle">Marvel Realeases What If Episode 7</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <hr className="highlight__rule" />
        <div className="recent__posts">
            <img src={recentImg04} alt="" /> 
            <h4 className="subtitle">Marvel Realeases What If Episode 7</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
        <hr className="highlight__rule" />
        <div className="recent__posts">
            <img src={recentImg05} alt="" /> 
            <h4 className="subtitle">Marvel Realeases What If Episode 7</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
        </div>
    </div>
    )
}

export default Rightsidebar
