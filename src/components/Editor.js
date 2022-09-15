import React from 'react';
import './Editor.css';

export default function Editor() {
  return (
    <div className="editor">Editor
      <div className="">Select a head
        <select name="head">
          <option value="deer">deer</option>
          <option value="frog">frog</option>
          <option value="wombat">wombat</option>
        </select>
      </div>
      <div className="">Select a top
        <select name="tops">
          <option value="jacket">jacket</option>
          <option value="armor">armor</option>
          <option value="jersey">jersey</option>
        </select>
      </div>
      <div className="">Select bottoms
        <select name="bottoms">
          <option value="pajamas">pajamas</option>
          <option value="jeans">jeans</option>
          <option value="leg">leg</option>
        </select>
      </div>
    </div>
  );
}
