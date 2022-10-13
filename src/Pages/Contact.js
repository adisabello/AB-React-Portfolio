import React from 'react'

function Contact(){
    return (
        <div className='section contact'>
            <h1>Contact Me</h1>
            <div>
                <form action="#" method='post'>
                    <p>Name</p>
                    <input type='text' name='name' required/>
                    <p>Email</p>
                    <input type='email' name='email' required />
                    <p>Message</p>
                    <textarea required name='message'>
                    </textarea>
                    <br/>
                    <button>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;