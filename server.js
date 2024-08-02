import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
//const express = require('express')
//const colors = require('colors')

//configure env
dotenv.config();

//  rest object
const app = express();

// rest api

app.get('/', (req, res) => {
    res.send('<h1>Welcome to ecommerce app</h1>');
    /**res.send({
        message: 'welcome to ecommerce app'
    })**/


})

// port
const PORT = process.env.PORT || 8080;
// run app
app.listen(PORT, () => {
    console.log(`server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})