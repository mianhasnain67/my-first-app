const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.json({
    status: "success",
    message: "Welcome to My First DevOps Automated Pipeline!",
    version: "1.0.0"
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});