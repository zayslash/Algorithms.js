/*
Name: Zanif Sandy
Main API File
*/

const http = require('http');
const url = require('url');
var StringDecoder = require('string_decoder').StringDecoder;
var config = require('./config');

var server= http.createServer(function(request,response){

//Get URL and Parse interval
var parsedUrl = url.parse(request.url,true);
var path = parsedUrl.pathname;
var trimmedPath = path.replace(/^\/+|\/+$/g,'');

//Get Query String as an Object;
var queryStringObject = parsedUrl.query;
var method = request.method.toLowerCase();

//Gets the HTTP METHOD
var header = request.headers;

//Get payload, if any
var decoder = new StringDecoder('utf-8');
var buffer = '';
request.on('data',function(data){
  buffer += decoder.write(data);
});
request.on('end', function(){
    buffer += decoder.end();


    var chosenHandler = typeof(router[trimmedPath]) !== 'undefined' ? router[trimmedPath] : handlers.notFound;

    var data = {
      'trimmedPath' : trimmedPath,
      'queryStringObject' : queryStringObject,
      'method' : method,
      'header' : header,
      'payload' : buffer
    }

    chosenHandler(data,function(statusCode,payload){
      statusCode = typeof(statusCode) == 'number' ? statusCode : 200 ;

      payload = typeof(payload) == 'object' ? payload : {};

      payloadString = JSON.stringify(payload);
      response.setHeader('Content-Type','application/json');
      response.writeHead(statusCode);
      response.end(payloadString);

      console.log('returning this response:', statusCode,payloadString);

    });


});


//Send the Responser
//response.end('Hello World\n');

console.log(`Request recieved on path: ${trimmedPath} with ${method} with these query string parameters `,queryStringObject );

console.log(`Request recived with these Headers: `,header);

});

//Start Sever
server.listen(config.port, function(){
  console.log("Server is running on port " + config.port+ " in " + config.envName + " Mode");
});


var handlers ={};

handlers.sample = function(data,callback){
  //callback a http stat code, and payload Object
  callback(406,{'name': 'sample handler'});

};

//Not Found
handlers.notFound = function(data,callback){
 callback(404);
};


//Defined request router
var router = {
 'sample': handlers.sample,
}
