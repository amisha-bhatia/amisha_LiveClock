
import './App.css';
import { LiveClock } from './components/LiveClock';
import { Setting } from './components/Setting';

function App() {
  return (
    <div className="App">
      <LiveClock />
      <Setting/>
    </div>
  );
}

export default App;
