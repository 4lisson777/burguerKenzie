import api from './services/api';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    api.get().then((response) => console.log(response));
  }, []);
  return <div className="App"></div>;
}

export default App;
