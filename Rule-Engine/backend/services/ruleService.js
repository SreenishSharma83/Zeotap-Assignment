const { Node } = require('../utils/validation');

function createAST(ruleString) {
    const parts = ruleString.match(/([A-Za-z]+)\s*([<>=]+)\s*([0-9]+)/);
    if (!parts) return null;

    const node = new Node('operand', parts[1], parts[2], Number(parts[3]));
    return new Node('root', null, null, node);
}

function combineRules(rules) {
    const root = new Node('operator', 'AND'); // Combine with AND for simplicity
    rules.forEach(rule => {
        const ast = createAST(rule);
        if (ast) {
            root.addChild(ast);
        }
    });
    return root;
}

function evaluateRule(ast, data) {
    if (!ast) return false;

    if (ast.type === 'operand') {
        const { field, operator, value } = ast;
        switch (operator) {
            case '>':
                return data[field] > value;
            case '<':
                return data[field] < value;
            case '=':
                return data[field] === value;
            default:
                return false;
        }
    } else if (ast.type === 'operator') {
        return ast.children.every(child => evaluateRule(child, data));
    }
    return false;
}

module.exports = { createAST, combineRules, evaluateRule };
