require('dotenv').config();
const express = require('express');
const path = require('path');
const contactRoute = require('./routes/contact');

const app = express();
app.use(express.json());

// API route
app.use('/api/contact', contactRoute);

// Serve React build
app.use(express.static(path.join(__dirname, '../frontend/build')));
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
