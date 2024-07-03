const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());  // Enable CORS for all routes

app.post('/api/add-content', (req, res) => {
  const { type, data } = req.body;

  let filePath = '';
  switch (type) {
    case 'team':
      filePath = path.join(__dirname, 'data', 'team.json');
      break;
    case 'research':
      filePath = path.join(__dirname, 'data', 'research.json');
      break;
    case 'dataset':
      filePath = path.join(__dirname, 'data', 'datasets.json');
      break;
    case 'publication':
      filePath = path.join(__dirname, 'data', 'publications.json');
      break;
    default:
      return res.status(400).send('Invalid content type');
  }

  fs.readFile(filePath, 'utf8', (err, fileData) => {
    if (err) return res.status(500).send('Error reading file');

    let jsonData = [];
    try {
      jsonData = JSON.parse(fileData);
    } catch (e) {
      if (e instanceof SyntaxError) {
        jsonData = [];
      } else {
        return res.status(500).send('Error parsing JSON');
      }
    }

    jsonData.push(data);

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) return res.status(500).send('Error writing to file');
      res.send('Content added successfully');
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
