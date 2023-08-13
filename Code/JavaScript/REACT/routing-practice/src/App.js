import React from "react";
import Home from "./components/Home";
import Number from "./components/Number";
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import ColoredWord from "./components/ColoredWord";


function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/4">Number 4</Link></li>
          <li><Link to="/hello">Hello</Link></li>
          <li><Link to="/hello/blue/red">Hello</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/:id" element = {<Number/>}/>
        <Route path="/:id/:colorbg/:colortext" element = {<ColoredWord/>}/>
      </Routes>
    </div>
  );
}

export default App;
