const Rule = require('../models/Rule');
const { createAST, combineRules, evaluateRule } = require('../utils/astUtils');

exports.createRule = async (req, res) => {
    try {
        const { ruleString } = req.body;
        const ast = createAST(ruleString);
        const newRule = new Rule({ ruleString, ast });
        await newRule.save();
        res.status(201).json(newRule);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.combineRules = async (req, res) => {
    try {
        const { rules } = req.body;
        const combinedAST = combineRules(rules);
        res.json({ ast: combinedAST });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.evaluateRule = async (req, res) => {
    try {
        const { ast, data } = req.body;
        const result = evaluateRule(ast, data);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
