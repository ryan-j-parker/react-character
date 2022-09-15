import React from 'react';
import './Preview.css';

export default function Preview({ head }) {
  return (
    <div className="preview">
      <img src={`${process.env.PUBLIC_URL}/icons/${head}.png`} />
    </div>
  );
}
