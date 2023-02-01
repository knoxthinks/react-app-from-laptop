import logo from './logo.svg';
import './App.css';
import PaginationControlled from './Components/Pagination';
// import ButtonBases from './Components/ComplexButton';
import SpeedDialTooltipOpen from './Components/SpeedDial';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Creativity goes here.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <ButtonBases /> */}
        <SpeedDialTooltipOpen />
        <PaginationControlled />
      </header>
    </div>
  );
}

export default App;
