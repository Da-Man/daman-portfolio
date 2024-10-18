import React, { useState } from 'react'
import './stylesheets/JavaDemo.scss';
import Typewriter from 'react-ts-typewriter';

const JavaDemo: React.FC = () => {

    const [fetchedImageUrl, setFetchedImageUrl] = useState<string>('');

    const fetchedImageTag = <img src={ fetchedImageUrl } alt="Meme: It ain't much but it's honest work"></img>;
    const errorMsg = "Error :( Something went wrong";

    async function getData() {
        try {
            const response = await fetch("http://localhost:8080/getImageURL", {method: "GET"})

            if (!response.ok) {
                throw new Error(errorMsg); 
            }
            else if (response.ok) {
                const response_body = await response.text()
                setFetchedImageUrl(response_body);
            }  
        }
        catch {
            throw new Error(errorMsg); 
        }  
    }

    return (
        <div id="JavaDemo" className="JavaDemo container">
            <div className='container-content'>
                <h1><Typewriter text="Java Demo" loop={true} speed={100} delay={3000} /></h1>
                <p>So, to show that I do know Java, I setup a very very very simple Java Backend with one controller. All it does is return an image URL:</p>
                <button onClick={getData}>Get Image</button>
                { fetchedImageUrl !== '' ?  fetchedImageTag  : null}
            </div>
        </div>
    )
}

export default JavaDemo