// A very basic server for serving the client bundle and assets
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server started. Listening on port ${port}.`)
});
