import React from 'react';
import {useState} from 'react';
import SelectorBar from './src/components/SelectorBar';
import NavBar from './src/components/NavBar';
import Display from './src/components/Display';
import {calculateT} from './src/utils/t.js';
import { initialT, initialView } from './src/constants.js';

function App() {
    const [tValue, setTValue] = useState(initialT);
    const [view, setView] = useState(initialView);
    const onUpdate = () => setTValue(calculateT());
    
    return (
        <div>
            <SelectorBar onUpdate={onUpdate} t={tValue} view={view} setView={setView} />
            <NavBar t={tValue} setTValue={setTValue} />
            <Display t={tValue} view={view} />
        </div>
    )
}

export default App;