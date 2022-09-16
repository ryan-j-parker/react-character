import React from 'react';
import './Editor.css';

export default function Editor({ head, setHead, tops, setTops, bottoms, setBottoms, headCounter, setHeadCounter, topsCounter, setTopsCounter, bottomsCounter, setBottomsCounter, catchphrase, setCatchphrase, catchphraseArray, setCatchphraseArray }) {
  return (
    <div className="editor">
      <div className="change">Select a head
        <select name="head" value={head} onChange={(e) => { setHead(e.target.value); setHeadCounter((prevState) => prevState + 1); }}>
          <option value="deer">deer</option>
          <option value="frog">frog</option>
          <option value="wombat">wombat</option>
        </select>
      </div>
      <div className="change">Select a top
        <select name="tops" value={tops} onChange={(e) => { setTops(e.target.value); setTopsCounter((prevState) => prevState + 1); }}>
          <option value="jacket">jacket</option>
          <option value="armor">armor</option>
          <option value="jersey">jersey</option>
        </select>
      </div>
      <div className="change">Select bottoms
        <select name="bottoms" value={bottoms} onChange={(e) => {setBottoms(e.target.value); setBottomsCounter((prevState) => prevState + 1); }}>
          <option value="pajamas">pajamas</option>
          <option value="jeans">jeans</option>
          <option value="leg">leg</option>
        </select>
      </div>
      <div className="counter-display">
        <p>You have changed your head {headCounter} times, your top {topsCounter} times, and your bottoms {bottomsCounter} times</p>
      </div>
      <div className="catchphrase">
        <textarea type="text" name="catchphrase" value={catchphrase} onChange={(e) => setCatchphrase(e.target.value)} />
        <button onClick={() => { return setCatchphraseArray([...catchphraseArray, catchphrase]), setCatchphrase(''); }}>Add a catchphrase</button>
      </div>
      <div className="catchphrase-display"><ul>{[catchphraseArray]}</ul></div>
    </div>
  );
}
