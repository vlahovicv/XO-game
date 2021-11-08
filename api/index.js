const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
    allowedHeaders: true,
  }
});

// app.get('/', (req, res) => {
//     res.json(null)
//   //res.sendFile(__dirname + '/index.html');
// });

io.on('connection', (socket) => {
  socket.on('message', ({name, message}) => {
      io.emit('message', {name, message})

  })
});
io.on('connection', (socket) => {
  socket.on('lobby', ({userId, lobbyId}) => {
      io.emit('lobby', {userId, lobbyId})
  })
});
let savedHistory = [Array(9).fill(null)]
io.on('connection', (socket) => {
  socket.on('move', (history) => {
    for(let x = 0; x < history.history.length; x++){
      for(let y = 0; y < history.history[x].length; y++){
        if(savedHistory[x]) {
          if(savedHistory[x][y]) {
            history.history[x][y] = savedHistory[x][y]
          }
        }
      }
    }
    savedHistory = [...history.history]
      io.emit('move', history)
  })
});

io.on('connection', (socket) => {
  socket.on('style', (value) => {
      io.emit('style', value)
  })
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});