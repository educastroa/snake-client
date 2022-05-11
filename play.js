const net = require("net");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: '50541' // PORT number here,
  });

  console.log('connected to server!');
  conn.write('world!\r\n');
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    setTimeout(() => {
      // client.write(data.toString());
    }, 1000);
    console.log(data.toString());
  });
  rl.on("line", (line) => {
    // console.log(`Received: ${line}`);
    conn.write(line);
  });
  

  return conn;
};

console.log("Connecting ...");
connect();