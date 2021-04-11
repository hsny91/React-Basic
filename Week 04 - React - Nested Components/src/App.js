
import './App.css';
import Foreigner from './data/foreigners.json';
import Person from './components/person'
function App() {
  return (
    <div className="App">
     <Person personList = {Foreigner}/>
    </div>
  );
}

export default App;
