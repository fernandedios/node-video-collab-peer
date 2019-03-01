const express = require('express');
const ExpressPeerServer = require('peer').ExpressPeerServer;

const PORT = process.env.PORT || 9000;
const app = express();

const server = app.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Peer Server started at port ${PORT}`);
});

const peerServer = ExpressPeerServer(server, { debug: true });

app.use('/', peerServer);
