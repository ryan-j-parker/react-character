import React from 'react';
import './Preview.css';

export default function Preview({ head, tops, bottoms }) {
  return (
    <div className="preview">
      <div className="character">
        <img src={`${process.env.PUBLIC_URL}/icons/${head}.png`} className="character head" />
        <img src={`${process.env.PUBLIC_URL}/icons/${tops}.png`} className="character tops" />
        <img src={`${process.env.PUBLIC_URL}/icons/${bottoms}.png`} className="character bottoms" />
      </div>
    </div>
  );
}
