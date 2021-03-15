import React from 'react';
import '../components/nav/nav.css';


function Nav(props) {
const tabs = ["About", "Contact", "Work", "Resume"];

return (

<div className='hero-image'>
<ul className="nav">
  {tabs.map(tab => (
    <li className="nav-item" key={tab}>
     <a 
      href={'#' + tab.toLowerCase()}
      onClick={() => props.handlePageChange(tab)}
      className={
        props.currentPage === tab ? 'nav-link active' : 'nav-link'
       }
     >
       {tab}
      </a>
   </li>
))}
</ul>
</div>

);
}

// function Footer(props) {
// conts tab = {  }

// }

export default Nav;
