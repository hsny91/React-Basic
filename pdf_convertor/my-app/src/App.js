
import './App.css';
import { PDFViewer } from '@react-pdf/renderer';
import MenuViewver from './componet/MenuViewver'

function App() {
  return (
    <PDFViewer>
          <MenuViewver />
    </PDFViewer>

  );
}

export default App;
