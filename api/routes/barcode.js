/**
 * Router generates a barcode based on family id
 * 
 */
'use strict';
const express = require('express');
const router = express.Router();
const libBarCode = require('../../lib/barcode.js');
var codes = require("rescode");

 

router.get('/', async (req, res, next) => {
    let id = req.query.familyid;
    let type = req.query.type;
    let status= req.query.status;
    let statusmessage = req.query.statusmessage;
    try
    {
        if(id === null){
            res.status(400).send('');
        }
        if(type === null){
            type = 'b';
        }
        let data = libBarCode.getCode(id, type);

        /*
        if(type.toUpperCase() === 'b')
        {
            data = libBarCode.getBarcode(id);
            //codes.loadModules(["code39"], { "includetext":true, "guardwhitespace":false, "inkspread":0, scaleX:2, textyoffset:-15 });
            //data = codes.create("code39", id);
        }
        else if(type.toUpperCase() === 'q')
        {
            data = libBarCode.getQRCode(id);
            //codes.loadModules(["qrcode"], { "eclevel":"M" , "version": "4", "scaleX": 2, "scaleY": 2} );  
            //data = codes.create("qrcode",id);
        }
        */
        res.setHeader("Content-Type","image/png");
        res.end(data);
    }
    catch(error)
    {
        res.status(404).send(error);
    }
});

module.exports = router;