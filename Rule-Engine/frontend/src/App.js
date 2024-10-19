import React, { useState } from 'react';
import RuleForm from './components/RuleForm';
import RuleList from './components/RuleList';
import './styles.css';

function App() {
    const [rules, setRules] = useState([]);
    const [combinedAST, setCombinedAST] = useState(null);

    const addRule = (newRule) => {
        setRules(prevRules => [...prevRules, newRule]);
    };

    const handleCombineRules = async () => {
        const response = await fetch('http://localhost:5000/api/rules/combine', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ rules }),
        });
        const data = await response.json();
        setCombinedAST(data);
    };

    return (
        <div className="app-container">
            <h1>Rule Engine</h1>
            <RuleForm addRule={addRule} />
            <button onClick={handleCombineRules}>Combine Rules</button>
            <RuleList rules={rules} combinedAST={combinedAST} />
        </div>
    );
}

export default App;
