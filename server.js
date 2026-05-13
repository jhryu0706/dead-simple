const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Serve static files (index.html, data/projects.json, etc.)
app.use(express.static(__dirname));

// Default route - serve index.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Privacy policies listing page
app.get('/privacy-policy', (req, res) => {
  res.sendFile(path.join(__dirname, 'privacy.html'));
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
