import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

const coingeckoUrl =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

function App() {
  const [currencies, setCurrencies] = useState([]);

  useEffect(() => {
    axios.get(coingeckoUrl).then((res) => {
      setCurrencies(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className='App'>
      <h1>API</h1>
    </div>
  );
}

export default App;
