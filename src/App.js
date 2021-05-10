import React, { useState } from "react"
import './App.css';
import Header from './Header';
import Nav from "./Nav";
import Result from "./Result";
import requests from './requests'

function App() {

  const [selectedOption, setselectedOption] = useState(requests.fetchRomanceMovies)
  return (
    <div className="App">
      
      {/* {Header}  */}
   <Header/>
      {/* {Nav} */}
   <Nav setselectedOption ={setselectedOption} />
      {/* {Body} */}
     
       <Result selectedOption = {selectedOption} />
    </div>
  );
}

export default App;
