import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-4">
          <Counter />
        </div>
        <div className="col-4"></div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default App;
