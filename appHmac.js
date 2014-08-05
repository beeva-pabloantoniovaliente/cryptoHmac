var crypto = require('crypto'); 
var os = require('os');

//Caracter de fin de linea
var endOfLine = os.EOL;

//Clave de Firmado asociada a la aplicación
var signatureKey = 'signatureBeeva';


/**************Si queremos añadir el Body a la firma, descomentamos estas lineas 
										y las que estan en signatureString****************/
//Solo en Peticiones de tipo POST o PUT
//var body = 
//'{' + endOfLine +
//'	"id" : 1,' + endOfLine +
//'	"name" : "Beeva"' + endOfLine +
//'}';

//Cabecera ContentMD5 codificada en Base64
//var headerContentMD5 = crypto.createHash('md5').update(body).digest('base64');

//Hash en MD5 del Body
//var hashMD5 = crypto.createHash('md5').update(body).digest('hex');

//console.dir(headerContentMD5);
//console.dir(hashMD5);
/************************************************************************************************/

// Cadena total a firmar
var signatureString = 	'GET' 
						+ endOfLine
						+ '/apigest/api?app_id=com.test.beeva&app_key=123456789'
						+ endOfLine
						+ '1375896880268'
						//+ endOfLine
						//+ hashMD5
						;

// digest puede ser 'hex', 'binary' o 'base64'
var hash = crypto.createHmac('sha256', signatureKey).update(signatureString).digest('hex');

console.dir('Firma HMAC: ' + hash);