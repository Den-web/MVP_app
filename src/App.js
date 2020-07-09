import React from 'react';

import Button from '@material-ui/core/Button';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo"/>
            <Button href={''} variant="contained" color="primary">
                Hello World
            </Button>
        </div>
    );
}

export default App;
