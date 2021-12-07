import React from 'react';
import { useState } from 'react/cjs/react.development';

import './form.scss';

// document.getElementById("button").style.background='#000000';

export default function Form(props) {
  let [method,setMethod]=useState('get')

  let [colorGet,setcolorGet]=useState('red')
  let [colorPost,setcolorPost]=useState('red')
  let [colorPut,setcolorPut]=useState('red')
  let [colorDelete,setcolorDelete]=useState('red')
 
  let [getFlag,setgetFlag]=useState(false)
  let [postFlag,setpostFlag]=useState(false)
  let [putFlag,setputFlag]=useState(false)
  let [deleteFlag,setdeleteFlag]=useState(false)


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

  function colorHander() {
    // if (getFlag) {
    //   setColor('yellow')
      
    // }

    getFlag? setcolorGet('yellow') : setcolorGet('red');
     postFlag? setcolorPost('yellow') : setcolorPost('red');
     deleteFlag? setcolorDelete('yellow') : setcolorDelete('red');
     putFlag? setcolorPut('yellow') : setcolorPut('red');
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' />
          <button data-testid="go"  type="submit">GO!</button>
        </label>
        <label className="methods">
          <span  style={{background:`${colorGet}`}}  data-testid="get-button" onClick={()=>{setMethod('get');setgetFlag(true);setpostFlag(false);setputFlag(false);setdeleteFlag(false); colorHander() }}   id="get">GET</span>


          <span style={{background:`${colorPost}`}}    onClick={()=>{setMethod('post');setgetFlag(false);setpostFlag(true);setputFlag(false);setdeleteFlag(false),colorHander() }} id="post">POST</span>

          <span style={{background:`${colorPut}`}}  onClick={()=>{setMethod('put');setgetFlag(false);setpostFlag(false);setputFlag(true);setdeleteFlag(false),colorHander() }} id="put">PUT</span>

          <span style={{background:`${colorDelete}`}}  onClick={()=>{setMethod('delete');setgetFlag(false);setpostFlag(false);setputFlag(false);setdeleteFlag(true),colorHander() }} id="delete" >DELETE  </span>
        </label>
        <label>
          <textarea name='json' type='json'></textarea>
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
