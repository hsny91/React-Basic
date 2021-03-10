import './App.css';
import BannerImage from './component/BannerImage';
import PhotoEntry from './component/PhotoEntry'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage/>
        <div>
         <h1>Welcome My Website</h1>
         <h3>Husniye Sekeroglu</h3>
         <PhotoEntry/>
        </div>
      </header>
    </div>
  );
}

export default App;
