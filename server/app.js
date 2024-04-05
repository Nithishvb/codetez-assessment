const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const router = require('./src/routes/routes');
const db = require('./config/dbconfig');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.json());

app.use('/api', router);

app.listen(5000, () => {
    console.log("server started on port 5000");
})