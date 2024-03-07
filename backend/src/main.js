const express = require('express')
const fs = require('fs');

const app = express()
app.use(express.json());
const port = 3000

function readJSONFile(filename, callback) {
  fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      callback(err, null);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      callback(null, jsonData);
    } catch (error) {
      callback(error, null);
    }
  });
}

function updateDataByHN(HN, newData, jsonData) {
  const index = jsonData.data.findIndex(item => item.HN === HN);
  if (index !== -1) {
    // Update the object
    jsonData.data[index] = { ...jsonData.data[index], ...newData };
    return true; // Return true if successfully updated
  }
  return false; // Return false if HN is not found
}

function getRandomHN() {
  return Math.floor(Math.random() * 1000000)
}

// Endpoint to get all data
app.get('/api/data', (req, res) => {
  readJSONFile('src/data.json', (err, jsonData) => {
    if (err) {
      res.status(500).send('Error reading JSON file');
      return;
    }
    res.json(jsonData);
  });
});

// Endpoint to get data by HN
app.get('/api/:hn', (req, res) => {
  const HN = req.params.hn;
  readJSONFile('src/data.json', (err, jsonData) => {
    if (err) {
      res.status(500).send('Error reading JSON file');
      return;
    }
    const person = jsonData.data.filter(item => item.HN === HN);
    res.json(person);
  });
});

app.put('/api/:hn', (req, res) => {
  const HN = req.params.hn;
  readJSONFile('src/data.json', (err, jsonData) => {
    if (err) {
      res.status(500).send('Error reading JSON file');
      return;
    }
    const success = updateDataByHN(HN, req.body, jsonData);

    // Write to json file 
    const jsonString = JSON.stringify(jsonData, null, 2);
    fs.writeFile('src/data.json', jsonString, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      console.log('File has been saved successfully');
    });
    if (success) {
      res.send("Data saved successfully.");
    } else {
      res.send("HN not found.");
    }
  });
})

app.post('/api/new', (req, res) => {
  const HN = getRandomHN()
  readJSONFile('src/data.json', (err, jsonData) => {
    if (err) {
      res.status(500).send('Error reading JSON file');
      return;
    }
    person = { HN: HN, ...req.body }
    jsonData.data.push(person)
    success = false
    // Write to json file 
    const jsonString = JSON.stringify(jsonData, null, 2);
    fs.writeFile('src/data.json', jsonString, (err) => {
      if (err) {
        console.error('Error writing file:', err);

        return;
      }
      success = true
      console.log('File has been saved successfully');
    });
    if (success) {
      res.send("Data added successfully.");
    } else {
      res.send("Cannot add data");
    }
  })
})

app.delete('/api/:hn', (req, res) => {
  const HN = req.params.hn;
  console.log(`Delete ${HN}`);
  readJSONFile('src/data.json', (err, jsonData) => {
    if (err) {
      res.status(500).send('Error reading JSON file');
      return;
    }
    // Delete by HN
    jsonData.data = jsonData.data.filter(item => item.HN !== HN);
    success = false
    // Write to json file 
    const jsonString = JSON.stringify(jsonData, null, 2);
    fs.writeFile('src/data.json', jsonString, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }
      success = true
      console.log('File has been saved successfully');
    });
    if (success) {
      res.send("Data deleted successfully.");
    } else {
      res.send("Cannot delete data");
    }
  })
})

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`)
})