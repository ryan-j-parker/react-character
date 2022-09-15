import React from 'react';
import { useState } from 'react';

import Editor from './Editor';
import Preview from './Preview';
import Character from './Character';

import './Main.css';
import background from '../../src/background.jpg';

export default function Main() {

  const [head, setHead] = useState([]);

  return (
    <main style={{ backgroundImage: `url(${background})` }} >
      <div className="main">
        <Editor head={head} setHead={setHead} />
        <Preview head={head} />
      </div>
    </main>
  );
}
