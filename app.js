const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schoolRoutes');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/', schoolRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
