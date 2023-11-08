import "./App.css";
import Counter from "./Counter";
import ToDoList from "./ToDoList";
import ToDoList2 from "./ToDoList2";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-4">
          <Counter />
        </div>
        <div className="col-4">
          <ToDoList2 />
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default App;
