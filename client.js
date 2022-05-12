const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: '50541' // PORT number here,
  });

  console.log('connected to server!');
  
 
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log("Connected");
    conn.write("Name: : )");
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