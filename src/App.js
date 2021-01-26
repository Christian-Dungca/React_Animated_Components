import React, { useState } from "react";
import "./App.css";

function App() {
  const [hasError, setError] = useState(false);

  const stylesWrapper = ["wrapper"];
  const stylesLabel = [];

  const formHandler = (event) => {
    event.preventDefault();
    setError(!hasError);
  };

  if (hasError) {
    stylesWrapper.push("invalid");
    stylesLabel.push("invalid");
  }

  return (
    <div className="App">
      <h1 className="title"> Form Validator ~ Shake Effect</h1>
      <form onSubmit={formHandler}>
        <label for="password">
          {!hasError ? (
            <h2 className={stylesLabel.join(" ")}> Password </h2>
          ) : (
            <h2 className={stylesLabel.join(" ")}> Password is Invalid </h2>
          )}{" "}
        </label>
        <div className={stylesWrapper.join(" ")}>
          <input type="password" id="password" />
          <button className="button" type="submit">
            {!hasError ? <i> &rarr; </i> : <h3> X </h3>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
