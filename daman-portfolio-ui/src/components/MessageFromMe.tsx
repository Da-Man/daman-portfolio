import React from 'react'
import './stylesheets/MessageFromMe.scss';
import Typewriter from 'react-ts-typewriter';

const MessageFromMe: React.FC = () =>  {
    return (
        <div id="MessageFromMe" className="MessageFromMe container">
            <div className='container-content'>
                <h1>#3: <Typewriter text="Message From Me" loop={true} speed={100} delay={3000} /></h1>
                <p>Hi Adam & Kayla,</p>
                <p>Firstly, thank you so much giving me the opportunity to work on this! I thoroughly enjoyed the process, and I am quite happy with how the look and feel of this website came out.</p>
                <p>Secondly, I apologise again for not being able to deliver any PHP/Laravel code. This past week was extremely hectic with work and some other personal commitments. So, in total, I only really had 4-5 hours to work on this. Regardless, I did my best to deliver a quality product and I hope you like it.</p>
                <p><b>More about the design:</b></p>
                <p>The design of this UI/UX is a custom one which I built specifically built for this task. My inspiration came from Uno cards and classic PowerPoint presentations. I wanted to take the essence of presenting information in PowerPoint slides but make it more fun and pleasant to look at, hence, Uno cards. And the above is what I came up with.</p>
                <p>Honestly, this is a very MVP version of my original vision, but it covers the main UX I was trying to achieve. I did something a little quirky too. If you shrink the website to a phone screen’s resolution, you will notice that the navbar on top disappears. I did this because I wanted the user to feel as if they were genuinely holding a “card” of information, rather than looking at a website. Now, I am not saying this is a good thing. Normally, I would try new things like this and then leave it to user testing to tell me if the idea works or sucks. So, you can give me some feedback on what you think about that.</p>
                <p>And once again, thank you for this opportunity. I am looking forward to hearing back your feedback on both the website and my application.</p>
                <p>Yours sincerely,<br></br>Daman</p>
                <p></p>
            </div>
        </div>
    )
}

export default MessageFromMe;