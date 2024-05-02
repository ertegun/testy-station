var net = require("net");

var server = net.createServer(function (socket) {
  socket.write("Echo server\r\n");
  socket.pipe(socket);
});

server.on("listening", function () {
  var address = server.address();
  console.log("TCP Server listening on " + address.address + ":" + address.port);
});

// Bağlantı kabul edildiğinde gerçekleşecek işlemler
server.on("connection", (socket) => {
  console.log("Yeni bir bağlantı kabul edildi.");

  // Gelen veriyi işleme
  socket.on("data", (data) => {
    console.log(`Sunucudan gelen veri: ${data}`);
  });

  // Bağlantı kapatıldığında gerçekleşecek işlemler
  socket.on("close", () => {
    console.log("Bağlantı kapatıldı.");
  });

  // Hata durumunda gerçekleşecek işlemler
  socket.on("error", (err) => {
    console.error("Bir hata oluştu:", err.message);
  });
});

server.listen(3334);
