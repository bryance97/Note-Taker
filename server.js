const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize the app and create port
const app = express();
const PORT = process.env.PORT || 3001;

// Return and routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Satrt server port
app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));