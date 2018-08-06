const express = require('express');
const path = require('path');
const app = express();
const route = require('./route.js');
const SocketIo  = require('socket.io');
const socketEvents = require('./socket.js');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'html')); 
app.use(express.static(path.join(__dirname, 'html')));
app.use('/', route);
// 에러 처리 부분
const server = app.listen(8080, () => {
  console.log('Express App on port 8080!');
});
const io = SocketIo(server);
socketEvents(io);
