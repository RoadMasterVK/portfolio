/*const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
  // Обработка нового подключения
  console.log('New WebSocket connection');

  ws.on('message', function incoming(message) {
    // Обработка входящего сообщения
    console.log('Received message:', message);

    // Отправка сообщения обратно клиенту
    ws.send('Server received: ' + message);
  });

  ws.on('close', function close() {
    // Обработка закрытия соединения
    console.log('WebSocket connection closed');
  });
});
 */
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 8888;

app.get('/gallery', (req, res) => {
  const galleryPath = path.join(__dirname, 'gallery');

  fs.readdir(galleryPath, (err, files) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error reading gallery folder' });
      return;
    }

    const fileNames = files.filter(file => {
      const fileExtension = path.extname(file).toLowerCase();
      return fileExtension === '.jpg' || fileExtension === '.png';
    });

    res.json({ files: fileNames });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
