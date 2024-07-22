import React from 'react';
import Header from './Header';
import Flipbook from './FlipBook';
import Footer from './Footer'; // Import the Footer component

const App = () => {
    // Define the PDF data
    const pdf = { name: 'PDF 1', url: 'C:/Users/suren/Desktop/GT/magazine_ver2/src/Techmag.pdf' };

    return (
        <div>
            {/* Render the Header component */}
            <Header />
            
            {/* Render the Flipbook component with the pdf prop */}
            <Flipbook pdf={pdf} />
            <Footer/>
        </div>
    );
};

export default App;
