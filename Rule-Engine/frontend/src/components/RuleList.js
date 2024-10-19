import React from 'react';

const RuleList = ({ rules, combinedAST }) => {
    return (
        <div>
            <h2>Rules</h2>
            <ul>
                {rules.map((rule, index) => (
                    <li key={index}>{rule}</li>
                ))}
            </ul>
            {combinedAST && (
                <div>
                    <h3>Combined AST:</h3>
                    <pre>{JSON.stringify(combinedAST, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default RuleList;
