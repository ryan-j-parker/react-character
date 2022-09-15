import React from 'react';
import './Editor.css';

export default function Editor({ head, setHead, tops, setTops, bottoms, setBottoms }) {
  return (
    <div className="editor">
      <div className="">Select a head
        <select name="head" value={head} onChange={(e) => setHead(e.target.value)}>
          <option value="deer">deer</option>
          <option value="frog">frog</option>
          <option value="wombat">wombat</option>
        </select>
      </div>
      <div className="">Select a top
        <select name="tops" value={tops} onChange={(e) => setTops(e.target.value)}>
          <option value="jacket">jacket</option>
          <option value="armor">armor</option>
          <option value="jersey">jersey</option>
        </select>
      </div>
      <div className="">Select bottoms
        <select name="bottoms" value={bottoms} onChange={(e) => setBottoms(e.target.value)}>
          <option value="pajamas">pajamas</option>
          <option value="jeans">jeans</option>
          <option value="leg">leg</option>
        </select>
      </div>
    </div >
  );
}
