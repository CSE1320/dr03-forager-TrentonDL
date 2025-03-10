const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3001, () => {
    console.log('Express Server is running on port 3001');
});

module.exports = app;