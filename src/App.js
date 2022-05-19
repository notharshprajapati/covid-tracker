import React from "react";
import covid from "./covid.json";

Object.entries(covid).map((idx) => console.log(idx[0]));

function App() {
  return (
    <div>
      {Object.entries(covid).map((idx) => (
        <h1>{idx[0]}</h1>
      ))}
    </div>
  );
}

export default App;
