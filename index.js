const express = require('express');
const ExpressPeerServer = require('peer').ExpressPeerServer;

const PORT = process.env.PORT || 9000;
const app = express();
const msg = `Peer Server started at port ${PORT}`;

const server = app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(msg);
});

const peerServer = ExpressPeerServer(server, { debug: true });

app.use('/', peerServer);
app.get('/port', function(req, res, next) {
  res.send(msg);
});
