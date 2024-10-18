import React from 'react'

async function getJava(){
    const response = await fetch("http://localhost:8080/hello/hi", {
      method: "GET",
      headers: {"Content-Type":"text/html"}
    })
    const response_body = await response.text()
    console.log(response_body);
    
}

const JavaBackEnd: React.FC = () => {
  return (
    <div>
        <h1>Get Java</h1>
        <button onClick={ getJava }>Get Java</button>
    </div>
  )
}

export default JavaBackEnd