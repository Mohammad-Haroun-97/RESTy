import React from 'react';
import { useState } from 'react/cjs/react.development';

import './form.scss';

export default function Form(props) {
  const [method,setMethod]=useState('get')

  const {handleApiCall}=props

  const handleSubmit = event => {
    event.preventDefault();
    console.log('=======',event.target.url.value);

    const formData = {
      method:method,
      url: event.target.url.value,
      body:event.target.json.value
    };
    console.log('formData',formData);

   handleApiCall(formData)
  }
  console.log('method',method);
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' />
          <button data-testid="go"  type="submit">GO!</button>
        </label>
        <label className="methods">
          <span data-testid="get-button" onClick={()=>setMethod('get')} id="get">GET</span>
          <span  onClick={()=>setMethod('post')} id="post">POST</span>
          <span onClick={()=>setMethod('put')} id="put">PUT</span>
          <span onClick={()=>setMethod('delete')} id="delete">DELETE</span>
        </label>
        <label>
          <textarea name='json' type='text'></textarea>
        </label>
      </form>
    </>
  );

  
  
}



// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

// export default Form;
