import "./App.css";
import React from "react";
import Catalog from "./Components/Catalog";

const App = (props) => {
  return (
    <div>
      <Catalog store={props.store} />
    </div>
  );
};

export default App;
