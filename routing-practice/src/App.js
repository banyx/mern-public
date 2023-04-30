import React from 'react';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';

const Home = (props) => {
  return(
    <div>
      <h1>Welcome</h1>
    </div>
  )
}

const Variable = (props) => {
  const { variable } = useParams();
  if (isNaN(variable)) {
    return (
      <div>
        <h1>This word is: { variable }</h1>
      </div>
    )
  }
  else {
    return(
      <div>
        <h1>This number is: { variable }</h1>
      </div>
    )
  }
}

const Colors = (props) => {
  const { variable, color1, color2 } = useParams();
  const style = { color: color1, backgroundColor: color2 };
  return (
    <div>
      <h1 style={style}>The word is: {variable}</h1>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/:variable' element={<Variable />}/>
        <Route path='/:variable/:color1/:color2' element={<Colors/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
