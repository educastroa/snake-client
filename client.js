const net = require("net");
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  console.log('connected to server!');
 
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Connected");
    conn.write("Name: MEL");
    // setInterval(() => {
    //   conn.write("Move: up") 
    // }, 200); 
  });
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = { connect };