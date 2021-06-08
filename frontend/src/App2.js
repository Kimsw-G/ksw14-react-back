import React, {useEffect, useState} from 'react';

function App2() {

    const [message, setMessage] = useState("");
    useEffect(() => {
        fetch('/api/hello')
            .then(response => response.text())
            .then(message => {
                setMessage(message);
            });
    },[])
    return (
        <div className="App2">
            <header className="App-header">
                <h1 className="App-title">{message}</h1>
            </header>
            <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
            </p>
        </div>
    );

}


export default App2;