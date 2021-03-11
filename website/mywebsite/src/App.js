import './App.css';
import BannerImage from './component/BannerImage';
import AlbumMaker from './component/AlbumMaker'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage/>
        <div>
         <h1>Welcome </h1>
         <h3>Husniye Sekeroglu</h3>
         <AlbumMaker/>
        </div>
      </header>
    </div>
  );
}

export default App;
