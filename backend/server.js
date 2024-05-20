const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 1111;

app.use(cors());
app.use(bodyParser.json());

const uri = 'mongodb+srv://Admin:Admin123@cluster0.bzxopzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('successfully');
}).catch((error) => {
  console.error('failed:', error.message);
});

app.get('/api/test', (req, res) => {
  res.send('API is working');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
