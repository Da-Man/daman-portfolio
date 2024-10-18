import React from 'react'
import './stylesheets/IHaveExperience.scss';
import Typewriter from 'react-ts-typewriter';

const IHaveExperience: React.FC = () =>  {
    return (
        <div id="IHaveExperience" className="IHaveExperience container">
            <div className='container-content'>
                <h1>#2: <Typewriter text="I Have Experience" loop={true} speed={100} delay={3000} /></h1>
                <p>The following is what I was able to legally salvage in terms of past projects:</p>
                <div className='IHaveExperience-projects'>

                    <div className='IHaveExperience-projects-project'>
                        <img src={require("../images/brandalism.png")} alt="Brandlism website image"></img>
                        <div className='IHaveExperience-projects-project-info'>
                            <h4>Brandalism</h4>
                            <p>I designed and developed this frontend some years ago. The website has been updated since, however, the overall design and layout has not changed much.</p>
                            <a href="https://brandalism.com.au/" target="_blank">Visit Website</a>
                        </div>
                    </div>

                    <div className='IHaveExperience-projects-project'>
                        <img src={require("../images/squareandpark.png")} alt="Millpost Technologies website image"></img>
                        <div className='IHaveExperience-projects-project-info'>
                            <h4>Millpost Technologies: The Square & The Park (Client Project)</h4>
                            <p>I designed and developed the frontend for this client project.</p>
                            <a href="https://www.aila.org.au/tsatp" target="_blank">Visit Website</a>
                        </div>
                    </div>

                    <div className='IHaveExperience-projects-project'>
                        <img src={require("../images/millpost.png")} alt="Millpost Technologies website image"></img>
                        <div className='IHaveExperience-projects-project-info'>
                            <h4>Millpost Technologies: Main website</h4>
                            <p>I designed and developed this. I was only given less than a week to do this.</p>
                            <a href="http://www.millpost.com.au/" target="_blank">Visit Website</a>
                        </div>
                    </div>

                    <div className='IHaveExperience-projects-project'>
                        <img src={require("../images/dap.png")} alt="DAP website image"></img>
                        <div className='IHaveExperience-projects-project-info'>
                            <h4>CSIRO: Data Access Portal (DAP)</h4>
                            <p>I contributed to numerous UI components and backend services.</p>
                            <a href="https://data.csiro.au/" target="_blank">Visit Website</a>
                        </div>
                    </div>

                    <div className='IHaveExperience-projects-project'>
                        <img src={require("../images/rpr.png")} alt="RPR website image"></img>
                        <div className='IHaveExperience-projects-project-info'>
                            <h4>CSIRO: Research Publication Respository (RPR)</h4>
                            <p>I developed this frontend and numerous backend services. The frontend deisgn was not mine, it would have looked better otherwise.</p>
                            <a href="https://publications.csiro.au/publications" target="_blank">Visit Website</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IHaveExperience;