import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Currency from './Currency';

const coingeckoUrl =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

function App() {
  const [currencies, setCurrencies] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(coingeckoUrl).then((res) => {
      setCurrencies(res.data);
      console.log(res.data);
    });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCurrencies = currencies.filter((currency) =>
    currency.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='currencyApp'>
      <div className='currencySearch'>
        <h1 className='currencyText'>Find a Krypto Currency</h1>
        <form>
          <input
            type='text'
            placeholder='Find a Currency'
            className='currencyInput'
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCurrencies.map((currency) => {
        return (
          <Currency
            key={currency.id}
            name={currency.name}
            image={currency.image}
            symbol={currency.symbol}
            marketcap={currency.market_cap}
            price={currency.current_price}
            priceChange={currency.price_change_percentage_24h}
            volume={currency.total_volume}
          />
        );
      })}
    </div>
  );
}

export default App;
