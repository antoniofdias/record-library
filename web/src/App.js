import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import api from './services/api';

import RecordItem from './components/RecordItem';

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    async function loadRecords() {
      const response = await api.get('/records');

      setRecords(response.data);
    }

    loadRecords();
  }, []);

  return (
    <div id="app">
      <main>
        <ul>
          {records.map(record => (
            <RecordItem key={record._id} record={record} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
