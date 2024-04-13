import React from 'react';
import Weather from './Components/Weather';
import Header from './Components/Header';

const App = () => {
    return (
        <div className='weather'>
            <Header />
            <Weather />

        </div>
    );
}

export default App;
