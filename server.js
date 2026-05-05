const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Serve static files (portfolio.html, data/projects.json, etc.)
app.use(express.static(__dirname));

// Default route - serve portfolio.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio.html'));
});

// Privacy policy routes
app.get('/privacy-policy/:appName', (req, res) => {
  const appName = req.params.appName;
  const policyPath = path.join(__dirname, 'privacy-policies', `${appName}.html`);
  res.sendFile(policyPath);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop');
});
