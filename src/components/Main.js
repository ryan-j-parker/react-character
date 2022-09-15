import React from 'react';
import { useState } from 'react';

import Editor from './Editor';
import Preview from './Preview';

import './Main.css';
import background from '../../src/background.jpg';

export default function Main() {

  const [head, setHead] = useState([]);
  const [tops, setTops] = useState([]);

  return (
    <main style={{ backgroundImage: `url(${background})` }} >
      <div className="main">
        <Editor head={head} setHead={setHead} tops={tops} setTops={setTops} />
        <Preview head={head} tops={tops}/>
      </div>
    </main>
  );
}
