import WebSocket from 'ws';

const ws = new WebSocket('wss://api.konsu.ai/ws/conversation/new', { handshakeTimeout: 1, timeout: 1, sessionTimeout: 1});

console.log("Attempting to connect to WebSocket...");
await new Promise((resolve, reject) => {
  ws.on('open', resolve);
  ws.on('error', reject);
  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });
});
