import React, { Component } from 'react';
import '../src/assets/styles/style.css'
import Header from './components/layout/Header/Header';
import UpperSection from './components/UpperSection/UpperSection';
import MainSection from './components/MainSection/MainSection';
import { DataProvider } from './DataContext';
import Footer from './components/layout/Footer/Footer';

class App extends Component {
    render() {
        return (
            <DataProvider>
                <div className="App">
                    <Header />
                    <UpperSection />
                    <MainSection />
                    <Footer/>
                </div>
            </DataProvider>
        );
    }
}

export default App;
