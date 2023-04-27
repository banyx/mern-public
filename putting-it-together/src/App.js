import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PersonCard 
        firstName = "Peanut"
        lastName = "Butter"
        age = {30}
        hairColor = "Brown"
      />
      <PersonCard 
        firstName = "Jelly"
        lastName = "Time"
        age = {33}
        hairColor = "Purple"
      />
      <PersonCard 
        firstName = "Little"
        lastName = "Mermaid"
        age = {20}
        hairColor = "Red"
        />
      </header>
    </div>
  );
}

export default App;
