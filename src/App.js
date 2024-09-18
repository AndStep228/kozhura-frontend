import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPromo from './components/MainPage/MainPromo';
import Header from './components/Header/Header';

class App extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <MainPromo />
            </div>

        )
    }
}

export default App