const express = require('express');
const { createAST, combineRules, evaluateRule } = require('../services/ruleService');

const router = express.Router();

router.post('/create', (req, res) => {
    const { ruleString } = req.body;
    const ast = createAST(ruleString);
    res.json(ast);
});

router.post('/combine', (req, res) => {
    const { rules } = req.body;
    const combinedAST = combineRules(rules);
    res.json(combinedAST);
});

router.post('/evaluate', (req, res) => {
    const { ast, data } = req.body;
    const result = evaluateRule(ast, data);
    res.json({ result });
});

module.exports = router;
