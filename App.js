import React, { useState } from 'react';
import News from './components/news';
import AboutUs from './components/about';
import Organizations from './components/organizations';
import Events from './components/events';
import Header from './components/header';
import Footer from './components/footer';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <div>
            <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
            <News />
            <hr />
            <AboutUs />
            <hr />
            <Organizations />
            <hr />
            <Events />
            <Footer />
        </div>
    );
}

export default App;
