import React from 'react'
import blogImg01 from '../img/pexels-fauxels-3184360.jpg'
import blogImg02 from '../img/pexels-josh-sorenson-1714208.jpg'
import blogImg03 from '../img/pexels-martin-lopez-2225617.jpg'
import blogImg04 from '../img/pexels-pixabay-267350.jpg'
import Rightsidebar from './Rightsidebar'

function Blog() {
    return (
        <div className="pages">
            <div className="pages__header">
                <h1>Edwin's Blog</h1>
                <hr />
            </div>
            <div className="blog__page">
                <div className="blog">
                    <div className="post">
                        <img width="auto" height="auto" src={blogImg01} alt="" />
                        <h2 className="title">Marvel Realeases What If Episode 7</h2>
                        <p hidden>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="post">
                        <img width="auto" height="auto" src={blogImg02} alt="" />
                        <h2 className="title">Marvel Realeases What If Episode 7</h2>
                        <p hidden>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="post">
                        <img width="auto" height="auto" src={blogImg03} alt="" />
                        <h2 className="title">Marvel Realeases What If Episode 7</h2>
                        <p hidden>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="post">
                        <img width="auto" height="auto" src={blogImg04} alt="" />
                        <h2 className="title">Marvel Realeases What If Episode 7</h2>                        
                    </div>
                </div>
                <Rightsidebar />
            </div>
        </div>
    )
}

export default Blog
