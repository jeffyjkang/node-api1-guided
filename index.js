// import the server and start it!
// const express = require("express");
// const server = express();

const server = require('./api/server')



server.listen(3000, () => {
  console.log('server listening on 3000')
});

// httpie
// http get :3000 --verbose