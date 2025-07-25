
import { useState } from 'react';
import './App.css';
import { LiveClock } from './components/LiveClock';
import { Setting } from './components/Setting';
import { TimeformatContext } from './Context';

function App() {

  const [timeFormat, setTimeformat] = useState(false);
  return (
    <TimeformatContext.Provider value={{ timeFormat, setTimeformat }}>
      <div className="App">
        <LiveClock />
        <Setting />
      </div>
    </TimeformatContext.Provider>
  );
}

export default App;
