import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import ICanCode from './components/ICanCode';
import HTMLDemo from './components/HTMLDemo';
import CSSDemo from './components/CSSDemo';
import JavaDemo from './components/JavaDemo';
import PHPDemo from './components/PHPDemo';
import IHaveExperience from './components/IHaveExperience';

// stylesheets
import './App.scss';
import './reset.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <ICanCode />
      <HTMLDemo />
      <CSSDemo />
      <JavaDemo />
      <PHPDemo />
      <IHaveExperience />
    </div>
  );
}

export default App;
