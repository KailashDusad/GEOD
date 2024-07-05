const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const type = req.body.type;
    let dir = '';
    switch (type) {
      case 'team':
        dir = path.join(__dirname, '..', 'src', 'team');
        break;
      default:
        dir = path.join(__dirname, '..', 'src', 'assets');
        break;
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const formData = JSON.parse(req.body.data);
    const fileName = formData.name || formData.title;
    cb(null, `${fileName}.jpg`);
  },
});

const upload = multer({ storage });

app.post('/api/add-content', upload.single('image'), (req, res) => {
  const { type, data } = req.body;
  console.log(`Received type: ${type}`);
  
  const formData = JSON.parse(data);

  if (req.file) {
    formData.image = req.file.filename;
  }

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

    jsonData.push(formData);

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) return res.status(500).send('Error writing to file');
      res.send('Content added successfully');
    });
  });
});


app.get('/api/team', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'team.json');
  fs.readFile(filePath, 'utf8', (err, fileData) => {
    if (err) return res.status(500).send('Error reading file');
    res.send(fileData);
  });
});

app.get('/api/research', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'research.json');
  fs.readFile(filePath, 'utf8', (err, fileData) => {
    if (err) return res.status(500).send('Error reading file');
    res.send(fileData);
  });
});

app.get('/api/datasets', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'datasets.json');
  fs.readFile(filePath, 'utf8', (err, fileData) => {
    if (err) return res.status(500).send('Error reading file');
    res.send(fileData);
  });
});

app.get('/api/publications', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'publications.json');
  fs.readFile(filePath, 'utf8', (err, fileData) => {
    if (err) return res.status(500).send('Error reading file');
    res.send(fileData);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
