import React from 'react';
import './App.css';
import Dinner from './dinner.js';

function App() {
  return (
    <div className="App">

      <Dinner mainmeal="Chicken Biryani" sweet="Kheer"/>

      <br/>
      <hr/>
      <br/>

      <Dinner mainmeal="Chicken Biryani" sweet="Ras Malai"/>

      <br/>
      <hr/>
      <br/>

      <Dinner mainmeal="Chicken Biryani" sweet="Brownies"/>

    </div>
  );
}

export default App;
