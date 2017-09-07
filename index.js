const server = require('server');
const { get, socket } = server.router;
const { render } = server.reply;

server({ views: 'public' },
  get('/', ctx => {
    return render('index.html');
  }),
  socket('connect', ctx => {
    console.log('Connected:', ctx.socket.id);
  }),
  socket('message', ctx => {
    console.log('Message:', ctx.data);
    ctx.io.emit('message', ctx.data)
  }),
  socket('disconnect', ctx => {
    console.log('Disconnected:', ctx.socket.id);
  })
);
