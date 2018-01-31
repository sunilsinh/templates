/*************************************
*****Blog application with node js********
********29 Jan 2018*********************
********Sunil Singh******************
*/

// Load module

var express = require('express');

// Create  express object to access all the functions from Express
var app = express();

var config = require('./config/dbconfig');
var registration_data = {
	first_name:"cds",
	last_name: "dcs",
	email_id: "dcs@gmail.com",
	password: "cd1s23",
	created_at: '2018-01-29'
}

//var get_rows = config.getResults("Users");
config.getDatas("Users",(data)=>{
	console.log('out function');
	console.log(data);
});

