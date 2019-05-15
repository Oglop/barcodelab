'use strict';
var codes = require("rescode");

function getCode(familyId, type)
{
    if (type === 'b'){
        return getBarcode(familyId);
    }
    else if (type === 'q'){
        return getQRCode(familyId);
    }

}

function getBarcode(familyID)
{
    
    codes.loadModules(["code39"], { "includetext":true, "guardwhitespace":false, "inkspread":0, scaleX:2, textyoffset:-15 });
    var dataCode39 = codes.create("code39", familyID);
    return dataCode39;
}

function getQRCode(familyID)
{
    codes.loadModules(["qrcode"], { "eclevel":"M" , "version": "4", "scaleX": 2, "scaleY": 2} );  
    var data = codes.create("qrcode",familyID);
    return data;
}

module.exports.getCode = getCode;