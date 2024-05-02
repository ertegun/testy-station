var PORT = 3335;
var HOST = "78.188.71.163";
var HOST = "127.0.0.1";
var HOST = "192.168.20.2";

var dgram = require("dgram");
// var message = new Buffer.alloc("<GRP15000;PowerOff>");
// var message = new Buffer.from("<GRP15000;PowerOff>");
var message = new Buffer.from("ERTETEST");

var client = dgram.createSocket("udp4");
client.send(message, 0, message.length, PORT, HOST, function (err, bytes) {
  if (err) throw err;
  console.log("UDP message sent to " + HOST + ":" + PORT + "***message:" + message);
  client.close();
});

// var dgram = require("dgram");
// var s = dgram.createSocket("udp4");
// s.send(Buffer.from("<GRP15000;PowerOff>"), PORT, HOST);
