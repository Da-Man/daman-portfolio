import React from 'react';
import './stylesheets/Header.scss';

const Header: React.FC = () => {
  return (
    <div className="Header">
        <a href="#top" className="Header-title">// Damanvir Singh</a>

        <nav>
          <a href="#ICanCode">Reason #1</a>
          <a href="#HTMLDemo">HTML Demo</a>
          <a href="#CSSDemo">CSS Demo</a>
          <a href="#JavaDemo">Java Demo</a>
          <a href="#PHPDemo">PHP Demo</a>
          <a href="#IHaveExperience">Reason #2</a>
        </nav>
    </div>
  )
}

export default Header;