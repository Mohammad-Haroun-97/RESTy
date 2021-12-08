import React from 'react';
import './header.scss'


export default function header() {
  return (
    <header>
      <h1>RESTy</h1>

      <ul>
      
        <li>
          <a  href="/Home">Home</a>

        </li>
        <li>
        <a  href="/History">History</a>

        </li>
        <li>
        <a  href="/Help">Help</a>
        </li>
        
      
    </ul>

    </header>
    
  );
  
}

// class Header extends React.Component {
//   render() {
//     return (
//       <header>
//         <h1>RESTy</h1>
//       </header>
//     );
//   }
// }

// export default Header;
