const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ruleRoutes = require('./routes/ruleRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/rules', ruleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
