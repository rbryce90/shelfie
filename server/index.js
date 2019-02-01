const express = require('express');
const bodyParser = require('body-parser');
const massive = require("massive");
const controller = require('./controller/controller.js');

require("dotenv").config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then( db => {
    console.log('connect to db');
    app.set("db", db);
    db.init();
  });

app.get('/api/inventory', controller.getInventory);
app.post('/api/inventory', controller.addInventory);

const port = 4000;

app.listen(port, () => console.log(`Server listening on port ${port}, YO!`));

