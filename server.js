const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Initialize the app and create port
const app = express();
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`App listening on PORT: ${PORT}`));