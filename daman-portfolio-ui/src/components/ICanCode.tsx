import React from 'react'
import './stylesheets/ICanCode.scss';

import Typewriter from 'react-ts-typewriter';

const ICanCode: React.FC = () => {
  return (
    <div id="ICanCode" className="ICanCode container">
        <div className='container-content'>
            <h1>#1: <Typewriter text="I Can Code" loop={true} speed={100} delay={3000} /></h1>
            
            <p>Here is the list of languages you wanted to see. Click on the language you would like to view the demo for:</p>
            <ul className='ICanCode-lang_list'>
                <a href="#HTMLDemo"><li>HTML</li></a>
                <a href="#CSSDemo"><li>CSS/Sass/SCSS</li></a>
                <li><b>React/TypeScript</b>: nothing to see here. This whole project is built in React and TypeScript...so, moving on...</li>
                <a href="#JavaDemo"><li>Java</li></a>
                <a href="#PHPDemo"><li>PHP/Laravel</li></a>
            </ul>
            <p></p>
        </div>
    </div>
  )
}

export default ICanCode