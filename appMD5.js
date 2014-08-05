var crypto = require('crypto'); 
var os = require('os');

//Caracter de fin de linea
var endOfLine = '\n';

var body = 
'{' + endOfLine +
'	"id" : 1,' + endOfLine +
'	"name" : "Beeva"' + endOfLine +
'}';

var bbva = '{"id": 1, "name": "BBVA"}';

//Cabecera ContentMD5 codificada en Base64
var headerContentMD5 = crypto.createHash('md5').update(bbva).digest('base64');

//Hash en MD5 del Body
var hashMD5 = crypto.createHash('md5').update(bbva).digest('hex');


console.dir(headerContentMD5);
console.dir(hashMD5);
