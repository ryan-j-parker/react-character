import React from 'react';
import './Preview.css';

export default function Preview({ head, tops }) {
  return (
    <div className="preview">
      <img src={`${process.env.PUBLIC_URL}/icons/${head}.png`} className="character head" />
      <img src={`${process.env.PUBLIC_URL}/icons/${tops}.png`} className="character tops" />
    </div>
  );
}
