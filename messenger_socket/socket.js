module.exports = (io) => {
    let room = [
        { _id: 'room01', members: []},
        { _id: 'room02', members: []},
      ];
    io.on('connection', (socket) => {
        console.log('a user connected');
        console.log(socket.id)
      
        socket.on('make room', (num, name) => {
            socket.join(room[num], () =>{
                console.log(name + ' join a ' + room[num]._id);
                io.to(room[num]).emit('make room', num, name);
            });
        });
        socket.on('chat message', (msg) => {
          io.emit('chat message', msg);
        });
      
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
      });
      
};