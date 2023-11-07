import logo from './logo.svg';
import './App.css';

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
      <div class name="header">
        <div class="left col-3">
            <img src="../public/logo192.png" alt="">
        </div>
        <div class="right col-9">
            <ul>
                <li>Anasayfa</li>
                <li>Hakkımızda</li>
                <li>Galeri</li>
                <li>İletişim</li>
            </ul>
        </div>
    </div>
    </div>
    
  );
}



export default App;
