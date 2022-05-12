let connection;


const setupInput = function (conn) {

  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);


  });


  const handleUserInput = function (key) {
    switch (key) {
      case '\u0003':
      process.exit();
      case 'w':
      console.log("Move: up");
      connection.write("Move: up");
      break;
      case 'a':
      console.log("Move: left");
      connection.write("Move: left");
      break;
      case 's':
      console.log("Move: down");
      connection.write("Move: down");
      break;
      case 'd':
      console.log("Move: right");
      connection.write("Move: right");
      break;

    }
    
  };
  
  return stdin;
};



module.exports = {setupInput}