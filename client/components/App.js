import React from "react";

import Header from "./Header.js";

const App = (props) => {
  return (
    <div className="container">
      <Header />
      {props.children}
    </div>
  );
};

export default App;
