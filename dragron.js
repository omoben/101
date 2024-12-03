const express = require("express");
const { serverConfig, emailConfig } = require("./core/config");
const dragonmailer = require("./core/dragonmailer");
//start the server 
const server = express();


//Routes

//1. Test
server.get("/test", (request, response) => {
response.send({message:"We Made It"})
const express = require("express");
const { serverConfig, emailConfig } = require("./core/config");
const dragonmailer = require("./core/dragonmailer");
//start the server 
const server = express();


//Routes

//1. Test
server.get("/test", (request, response) => {
response.send({message:"We Made It"})
})
server.get('/', (request, response) => {
response.send({message:"We Made It Again"})

})
