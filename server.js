const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  
  console.log('New WebSocket connection');

  ws.on('message', function incoming(message) {
    
    console.log('Received message:', message);

   
    ws.send('Server received: ' + message);
  });

  ws.on('close', function close() {
    
    console.log('WebSocket connection closed');
  });
});
