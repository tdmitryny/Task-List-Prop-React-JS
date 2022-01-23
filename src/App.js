import FirstBox from './components/FirstBox';
import SecondBox from './components/SecondBox';
//import { Form } from './components/Form'
import './App.css';

function App() {

  return (
    <div className="Container">
      <div className="Mainbox">
        <FirstBox />
        <SecondBox />
      </div>
    </div>
  );
}

export default App;
