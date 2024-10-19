import React, { useState } from 'react';

const RuleForm = ({ addRule }) => {
    const [ruleString, setRuleString] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addRule(ruleString);
        setRuleString('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={ruleString}
                onChange={(e) => setRuleString(e.target.value)}
                placeholder="Enter rule (e.g., age > 30)"
                required
            />
            <button type="submit">Add Rule</button>
        </form>
    );
};

export default RuleForm;
