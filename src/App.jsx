import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
const App = () => {
  const valueState = useSelector((state) => state.changeNumber);
  return (
    <div>
      <h1>Redux Tuts</h1>
      <h3>Simple Increment and Decrement</h3>
      <div className="func">
        <button>+</button>
        <input type="text" value={valueState} readOnly />
        <button>-</button>
      </div>
    </div>
  );
};

export default App;
