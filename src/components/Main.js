import React from 'react';
import Editor from './Editor';
import Preview from './Preview';

import './Main.css';

export default function Main() {
  return (
    <div className="main">
      <Editor />
      <Preview />
    </div>
  );
}
