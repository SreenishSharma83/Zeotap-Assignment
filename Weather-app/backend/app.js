const express = require('express');
const mongoose = require('mongoose');
const weatherRoutes = require('./routes/weatherRoutes');
const cors = require('cors');

const app = express();
const PORT = 5000;

const mongoURI = 'mongodb+srv://sahiln:sahiln@cluster0.qleed9o.mongodb.net/weather-app';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error(err));

app.use(cors());
app.use('/api', weatherRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
