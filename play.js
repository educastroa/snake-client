const { connect } = require('./client');

const setupInput = function () {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  });


  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
    console.log('hi');
  };
  
  
  return stdin;
};











console.log("Connecting ...");
connect();
setupInput();