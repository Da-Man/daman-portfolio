import React from 'react';
import './stylesheets/Home.scss';

import Typewriter from 'react-ts-typewriter';

const Home: React.FC = () => {
  return (
    <div id="Home" className="Home container">
      <div className="container-content">
        <h1><Typewriter text="Why you should hire ME you ask?" loop={true} speed={100} delay={3000} /></h1>
        <p>Well...here is a list of reasons:</p>
        <a href="#ICanCode">// Jump to Reasons</a>       
      </div>
    </div>
  );
};

export default Home;