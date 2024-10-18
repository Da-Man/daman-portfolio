import React from 'react'
import './stylesheets/HTMLDemo.scss';

const HTMLDemo: React.FC = () => {
  return (
    <div id="HTMLDemo" className="HTMLDemo container">
        <div className='container-content'>
            <h1>HTML Demo</h1>
            <p>Yes, I can HTML:</p>
            <h2>I am a &#60;H2&#62;</h2>
            <h3>I am a &#60;H3&#62;</h3>
            <h4>I am a &#60;H4&#62;</h4>
            <h5>I am a &#60;H5&#62;</h5>
            <h6>I am a &#60;H6&#62;</h6>
            <p>I am a &#60;p&#62; tag</p>
            <a href="javascript:void(0)">I am a link that goes no where</a>
            <br></br>
            <button>I do nothing</button>
            <p>I am just an ordered list:</p>
            <ol>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
            </ol>
        </div>
    </div>
  )
}

export default HTMLDemo