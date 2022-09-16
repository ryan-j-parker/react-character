import React from 'react';
import { useState } from 'react';

import Editor from '../Editor/Editor';
import Preview from '../Preview/Preview';

import './Main.css';
import background from '../../../src/background.jpg';

export default function Main() {

  const [head, setHead] = useState(['deer']);
  const [tops, setTops] = useState(['jacket']);
  const [bottoms, setBottoms] = useState(['pajamas']);
  const [headCounter, setHeadCounter] = useState(0);
  const [topsCounter, setTopsCounter] = useState(0);
  const [bottomsCounter, setBottomsCounter] = useState(0);
  const [catchphrase, setCatchphrase] = useState('');
  const [catchphraseArray, setCatchphraseArray] = useState([]);

  return (
    <main style={{ backgroundImage: `url(${background})` }} >
      <div className="main">
        <Editor head={head} setHead={setHead} tops={tops} setTops={setTops} bottoms={bottoms} setBottoms={setBottoms} headCounter={headCounter} setHeadCounter={setHeadCounter} topsCounter={topsCounter} setTopsCounter={setTopsCounter} bottomsCounter={bottomsCounter} setBottomsCounter={setBottomsCounter} catchphrase={catchphrase} setCatchphrase={setCatchphrase} catchphraseArray={catchphraseArray} setCatchphraseArray={setCatchphraseArray} />
        <Preview head={head} tops={tops} bottoms={bottoms} />
      </div>
    </main>
  );
}
