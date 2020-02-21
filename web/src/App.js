import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import api from './services/api';

import './App.css';
import './global.css';

import Cart from './components/Cart';
import Navbar from './components/NavBar';
import Default from './components/Default';
import Details from './components/Details';
import RecordList from './components/RecordList';

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
    <div>
      <Navbar />
      <main id="app">
        <Switch>
          <Route exact path="/" render={() => <RecordList records={records} />} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
