import React from 'react';
import MainPage from './pages/MainPage';
import { Route } from 'react-router-dom';

const App = () => {
    return(
        <Route path='/:category?' component={ MainPage } />
    );
}

export default App;