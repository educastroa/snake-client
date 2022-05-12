const { w, a, s, d } = require('./constants');

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
      console.log(w);
      connection.write(w);
      break;
      case 'a':
      console.log(a);
      connection.write(a);
      break;
      case 's':
      console.log(s);
      connection.write(s);
      break;
      case 'd':
      console.log(d);
      connection.write(d);
      break;
      case 'f':
      console.log("hello");
      connection.write("Say: hello");
      break;
      case 'q':
      console.log("fun!");
      connection.write("Say: fun"); 


    }
    
  };
  
  return stdin;
};



module.exports = {setupInput}