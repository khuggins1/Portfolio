import React, { useState } from 'react';
import Nav from '../utils/navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Resume from './pages/resume';
import Work from './pages/work';
import Footer from '../footer';


function Navagation() {
  
  const [currentPage, handlePageChange] = useState('About');


  const renderPage = () => {
    switch (currentPage) {
      case 'Contact':
        return <Contact />;
        case 'Resume':
            return<Resume />;
        case 'Work':
            return<Work />;
        case 'Footer':
          return<Footer />;
      default:
        return (<About />)
    
    }
  };

  return (
    <div>
  
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
   
      <div>{renderPage(currentPage)}</div>
    </div>

  );

}

export default Navagation;
