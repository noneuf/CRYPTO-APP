import React from 'react';

const Currency = ({
  image,
  name,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
}) => {
  return (
    <div className='currencyContainer'>
      <div className='currencyRow'>
        <div className='currency'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='currencySymbol'>{symbol}</p>
        </div>
        <div className='currencyData'>
          <p className='currencyPrice'>{price}</p>
          <p className='currencyVolume'>${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className='currencyPercent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='currencyPercent green'>{priceChange.toFixed(2)}%</p>
          )}
          <p className='currencyMarketCap'>
            Market Cape: ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Currency;
