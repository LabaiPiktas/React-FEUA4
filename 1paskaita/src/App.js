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
import "./App.css";

// importai viršuje
import FuncButton from "./components/FuncButton";
import FuncDiv from "./components/FuncDiv";
function App() {
  return <FuncDiv FuncButton title="Spausk mane" />;
}
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
