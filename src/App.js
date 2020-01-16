import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DATA_URL } from './constants';
import ThreadsList from './components/ThreadsList';

function App() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    axios.get(DATA_URL)
      .then((data) => {
        setThreads(data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div className="container">
      <div className="list-container">
        {threads.length > 0 ? <ThreadsList threads={threads} /> : <div>Loading...</div>}
      </div>
    </div>
  );
}

export default App;
