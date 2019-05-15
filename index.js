/*
    
*/
'use strict';
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const barCodeRoutes = require('./api/routes/barcode.js');
/**
 * Send all requests to router
 */
app.use('/', barCodeRoutes);
/**
 * If an error occured catch it here
 */
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status(404);
    next(error);
});
app.use((error, req, res, next) => {
    res.status(500).json({
        error: {
            Message: error.Message
        }
    });
});

const server = app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

