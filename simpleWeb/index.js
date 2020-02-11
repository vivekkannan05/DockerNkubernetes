const express = require('express');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('Hope you are doing well. Have a great Day');
});
 
app.listen(8080, () => {
  console.log('Listening on port 8080');
});