import React, { useEffect, useState } from "react";

import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Form from "./components/form/index";
import Results from "./components/results/index";
import axios from 'axios'

function App() {

  let [data,setData]=useState(null)
  let [requestParams,setRequestParams ]=useState({})


  useEffect( async()=>{
    let newEvent={
      Body:[],
      Headers: {}
    };


    if (requestParams.method==='get') {
      await axios.get(`${requestParams.url}`).then(collected=>{
        console.log('collected',collected);
         newEvent={Body : collected.data,
            Headers : collected.headers} 
      }) 
    
    }

    if (requestParams.method==='post') {
      let body=requestParams.body
      await axios.post(`${requestParams.url}`,body).then(collected=>{
       
        console.log('collected',collected);
         newEvent={Body : collected.data,
            Headers : collected.headers} 
      }) 
    
    }



   

    let count = newEvent.Body.length
    

    // console.log('newEvent',newEvent);
    const data = {

      count: count,
      results: newEvent
    };

    // data.results=newEvent

    console.log('dataaaaaaa',data);
    setData(data);
    
  },[requestParams])

  
  
  const callApi = async (requestParams) => {

    setRequestParams(requestParams)
    // mock output
    
  };

  // const options = {
  //   method: 'post',
  //   url: '/login',
  //   data: {
  //     firstName: 'Finn',
  //     lastName: 'Williams'
  //   },
  // axios(options);

  return (
    <React.Fragment>
      <Header />
      <div data-testid='method'>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
