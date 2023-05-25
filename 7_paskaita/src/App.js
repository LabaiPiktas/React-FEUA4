import React from "react";
import RandomPhotos from "./components/RandomPhotos/RandomPhotos";
import MyComponent from "./components/MyComponent";

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      <RandomPhotos />
      <MyComponent name="John" age={25} />
    </div>
  );
};

export default App;
