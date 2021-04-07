import logo from './logo.svg';
import './App.css';
import QuizApp from './component/QuizApp'

function App() {
  return (
    <div className="App">
      {/* <iframe src="https://wordwall.net/embed/6f7e2d2fcf5a48d58605fa3478a99218?themeId=44&templateId=5" width="500" height="380" frameborder="0" allowfullscreen></iframe> */}
      <QuizApp questionNumber={10}/>
    </div>
  );
}

export default App;
