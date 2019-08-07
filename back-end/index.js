 'use strict';

 const express = require('express');
 //const config = require('./config');
 const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
 const app = express();

 // Constants
 const PORT = 8080;
 const HOST = '0.0.0.0';

 app.get('/', (req, res) => { 
	 res.send('This is an automatically modified Hello World that uses nodemon');
 });

 app.listen(PORT, HOST);

 console.log(`Running on http:${HOST}:${PORT}`);
