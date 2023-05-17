/*import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
import React from "react";
import "./App.css";
import FuncDiv from "./components/FuncDiv";
import FuncButton from "./components/FuncButton";
import ClassButton from "./components/ClassButton";
import ClassDiv from "./components/ClassDiv";

function App() {
  return (
    <div>
      <FuncDiv title="Spausk mane" />
      <FuncButton title="O Ho Ho" />
      <ClassDiv title="Oi Oi Oi" />
      <ClassButton title="Na, kas dabar?" />
    </div>
  );
}

// importai viršuje
/*import FuncButton from "./components/FuncButton";*/
// apibrėžiam komponento pavadinimą, visada didžioji raidė.
// geroji praktika: Failo pavadinimas toks pat kaip komponento pavadinimas
/*function App() {
  const name = "Rokas";

  function getName() {
    return "Tadas";
  }

  const getSurname = () => {
    return "Tadukas";
  };

  const surname = getSurname();

  return (
    <div>
      <h1>Rokas</h1>
      <h2>{name}</h2>
      <h2>{getName()}</h2>
      <h2>{getSurname()}</h2>
      <h2>{surname}</h2>
      <FuncButton title="Click me" />
      <FuncButton title="Spausk mane" />
      <FuncButton title="Cia nespausti" />
    </div>
  );
}*/

// exportuojam, kad galėtume importuoti kitame faile
export default App;
