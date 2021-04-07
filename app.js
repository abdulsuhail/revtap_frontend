const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000);

const ngrok = require('ngrok');
(async function() {
    const url = await ngrok.connect(9000);
    process.env.WPT_URL = url;
  })();