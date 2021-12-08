import React, { useEffect, useState, useReducer } from "react";

import "./app.scss";

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import Form from "./components/form/index";
import Results from "./components/results/index";
import axios from "axios";
import History from "./components/History/history";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let initialState = {
  data: {},
  requestParams: {},
  history: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "requestParamsAction":
      return { ...state, requestParams: action.payload };

    case "dataAction":
      return { ...state, data: action.payload };

    case "historyAction":
      return { ...state, history: [action.payload, ...state.history] };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [history,setHistory]=useState([])

  // let [data,setData]=useState(null)
  // let [requestParams,setRequestParams ]=useState({})

  useEffect(
    async () => {
      let newEvent = {
        Body: [],
        Headers: {},
      };

      if (state.requestParams.method === "get") {
        await axios.get(`${state.requestParams.url}`).then((collected) => {
          console.log("collected", collected);
          newEvent = { Body: collected.data, Headers: collected.headers };
        });
      }

      if (state.requestParams.method === "post") {
        let body = state.requestParams.body;
        await axios
          .post(`${state.requestParams.url}`, body)
          .then((collected) => {
            console.log("collected", collected);
            newEvent = { Body: collected.data, Headers: collected.headers };
          });
      }

      let count = newEvent.Body.length;

      // console.log('newEvent',newEvent);
      const data = {
        count: count,
        results: newEvent,
      };
      // data.results=newEvent
      // console.log('dataaaaaaa',data);

      dispatch({ type: "dataAction", payload: data });

      // setData(data);
      const testhistory = {
        data: data,
        requestParams: state.requestParams,
      };

      dispatch({ type: "historyAction", payload: testhistory });

      // setHistory()
    },
    [state.requestParams],
    [state.history]
  );

  const callApi = async (requestParams) => {
    dispatch({ type: "requestParamsAction", payload: requestParams });
  };

  //   console.log('state',state);
  // console.log('state.requestParams.url',state.requestParams.url);

  return (
    <React.Fragment>
      {console.log("+++++++++++++", state.history)}
      <Router>
        <Header />

        <Switch>
          <Route exact path="/Home">
            
            <div data-testid="method">
              Request Method: {state.requestParams.method}
            </div>
            <div>URL: {state.requestParams.url}</div>
            <Form handleApiCall={callApi} />
            <Results data={state.data} />
            <History dataHistory={state.history} />
          </Route>
          <Route exact path="/History">
           
            <History dataHistory={state.history} />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
