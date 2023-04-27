import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <FirstComponent firstName="Sandy" lastName="Thai"/>
    </div>
  );
}

export default App;
