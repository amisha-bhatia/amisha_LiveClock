
import { useState } from 'react';
import './App.css';
import { LiveClock } from './components/LiveClock';
import { Setting } from './components/Setting';
import { DateContext, LanguageContext, TimeformatContext, VideoContext } from './Context';

function App() {

  const [timeFormat, setTimeformat] = useState(false);
  const [date, setDate] = useState(false);
  const [language, setLanguage] = useState("English");
  const [videoLink, setVideolink] = useState("/Ocean.mp4");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
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
    </LanguageContext.Provider>
  );
}

export default App;
