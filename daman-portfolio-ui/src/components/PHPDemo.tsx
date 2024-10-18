import React from 'react'
import './stylesheets/PHPDemo.scss';
import Typewriter from 'react-ts-typewriter';

const PHPDemo: React.FC = () => {
    return (
        <div id="PHPDemo" className="PHPDemo container">
            <div className='container-content'>
                <h1><Typewriter text="PHP Demo" loop={true} speed={100} delay={3000} /></h1>
                <p>Well…this is a bit embarrassing and I am genuinly sorry about this. I had planned to do something like the Java Demo, however, I just did not have enough time. So, you will just have to take my word for it and believe me when I say “I can PHP”. </p>
                <img src="https://media.makeameme.org/created/error-404-no.jpg" alt="Meme: 404 not found"></img>
            </div>
        </div>
    )
}

export default PHPDemo;