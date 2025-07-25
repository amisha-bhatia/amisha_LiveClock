
import { useState } from 'react';
import './App.css';
import { LiveClock } from './components/LiveClock';
import { Setting } from './components/Setting';
import { DateContext, TimeformatContext, VideoContext } from './Context';

function App() {

  const [timeFormat, setTimeformat] = useState(false);
  const [date, setDate] = useState(false);
  const [videoLink, setVideolink] = useState("/Fireworks.mp4");
  return (
    <VideoContext.Provider value={{ videoLink, setVideolink }}>
      <DateContext.Provider value={{ date, setDate }}>
        <TimeformatContext.Provider value={{ timeFormat, setTimeformat }}>
          <div className="App">
            <LiveClock />
            <Setting />
          </div>
        </TimeformatContext.Provider>
      </DateContext.Provider>
    </VideoContext.Provider>
  );
}

export default App;
