import React from 'react'
import Rightsidebar from './Rightsidebar'

function Contact() {
    return (
        <div className="pages">
            <div className="pages__header">
                <h1>Contact Us</h1>
                <hr />
                <p>Use the form below to send us any feedback or inquiry. We are glad to hear from you</p>
            </div>
            <div className="contact__page">
                <div className="contact__box">
                    <form action="/contact.html" method="POST">
                        <div className="contact-input">
                            <label for="name">Name</label>
                            <input type="text" name="name" />
                        </div>
                        <div className="contact-input">
                            <label for="email">Email</label>
                            <input type="text" name="email" />
                        </div>
                        <div className="contact-input">
                            <label for="message">Message</label>
                            <textarea name="message" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="contact-input">
                            <button>Submit</button>
                        </div>
                    </form>
                </div>
                <Rightsidebar />
            </div>
        </div>
    )
}

export default Contact
