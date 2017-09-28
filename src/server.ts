const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);

// For routing, Angular apps employ PathLocationStrategy by default, meaning that there won't be any hashes in the URL.
// This is generally cleaner and more desirable, but it comes at the cost of sub-routes not being accessible when
// someone navigates directly to them. What's required to make PathLocationStrategy work properly is some configuration
// on the server, and fortunately, it's fairly easy with express.
const path = require('path');
// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});