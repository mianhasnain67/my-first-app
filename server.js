const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.json({
    status: "success",
    message: "DevOps Automated Pipeline Working Successfully!",
    version: "2.0.0"
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});