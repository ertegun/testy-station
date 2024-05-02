var net = require("net");
var moment = require("moment");
// require('events').EventEmitter.defaultMaxListeners = 0;
var PORT = 3334;
// var PORT = 1337;

var HOST = "192.168.1.107";
var HOST = "78.188.170.253";
var HOST = "192.168.20.2";
var HOST = "test-station";

// var HOST = '127.0.0.1';

var modem = "GRP15000";
var device_id = "AEL21000574";

var connection_satus = false;

var M2_pack = "<M2;" + modem + ";" + device_id + ";AEL5[1]AEL.TF.21;17:22:26;18-04-11;000000.569;000000.170;000000.353;000000.006;000000.000;000.004;18-04-11,20:00;000000.000;000015.432>";
function M2PackageGenerator(params) {
  time = moment().format("HH:mm:ss");
  M2_pack = "<M2;" + modem + ";" + device_id + ";AEL5[1]AEL.TF.21;" + moment().format("HH:mm:ss") + ";" + moment().format("YY-MM-DD") + ";000000.569;000000.170;000000.353;000000.006;000000.000;000.004;18-04-11,20:00;000000.000;000015.432>";
  console.log(M2_pack);
}

setInterval(function () {
  console.log(moment().format("HH:mm:ss"));
  M2PackageGenerator();
  try {
    SendData();
  } catch (error) {}
}, 5000);
// SendData();

// M2PackageGenerator();
var U2_data = "15";
var U2_pack = "<U2;" + modem + ";" + U2_data + ">";

// var myVar = setInterval(function () {
//   // SendData();
// }, 10000);

// function XXXX(package) {
//   console.log(moment().format('HH:mm:ss'));
//   setTimeout(() => {
//     XXXX();
//   }, 3000);
// }
// XXXX();

var client = new net.Socket();
// console.log('---------------', client.connecting);
// if (!client.connecting) {
//   client.connect(PORT, HOST, function () {
//     console.log('Connected');
//     client.write(U2_pack);
//   });
//   console.log('Connected', client.connecting);
// }
// console.log('---------------', client.connecting);
// client.on('data', function (data) {
//   console.log('---------------DATAT');
//   console.log('Received: ' + data, data);

//   client.end();

//   console.log('---------------', client.connecting);

// });

function SendData(package) {
  console.log("---------------");
  if (!client.connecting) {
    client.connect(PORT, HOST, function () {
      console.log("Connected");
      client.write(M2_pack);
    });
    console.log("Connected", client.connecting);
  }

  client.on("data", function (data) {
    // console.log('DATATATDATADTADTAD', client.connecting);
    console.log("Received: " + data);
  });

  client.on("close", function () {
    // client.end();
    client.destroy();
    console.log("close---", client.connecting);
    client = new net.Socket();

    console.log("Connection closed");
  });

  // setTimeout(() => {
  //   SendData();
  // }, 5000);
}
