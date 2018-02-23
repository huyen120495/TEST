const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

