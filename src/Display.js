import React from 'react';

export default function Display() {
    return (
        <div className="display">
            <div className="catchphrase">
                <textarea type="text" name="catchphrase" value={catchphrase} onChange={(e) => setCatchphrase(e.target.value)} />
                <button onClick={() => { return setCatchphraseArray([...catchphraseArray, catchphrase]), setCatchphrase(''); }}>Add a catchphrase</button>
            </div>
            <div className="catchphrase-display">{[catchphraseArray]}</div>
        </div>
    );
}


