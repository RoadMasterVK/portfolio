const chatWindow = document.getElementById('chatWindow');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const usernameInput = document.getElementById('usernameInput');
const usernameButton = document.getElementById('usernameButton');
const clearButton = document.getElementById('clearButton');
const socket = new WebSocket('ws://localhost:8080');

let username = localStorage.getItem('username');
let chatHistory = localStorage.getItem('chatHistory');

if (username) {
  usernameInput.value = username;
  usernameInput.disabled = true;
  usernameButton.disabled = true;
}

if (chatHistory) {
  chatWindow.innerHTML = chatHistory;
}

usernameButton.addEventListener('click', function() {
  username = usernameInput.value;
  localStorage.setItem('username', username);
  usernameInput.disabled = true;
  usernameButton.disabled = true;
});

sendButton.addEventListener('click', function() {
  const message = messageInput.value;
  const fullMessage = username + ': ' + message;
  socket.send(fullMessage);
  messageInput.value = '';
});

clearButton.addEventListener('click', function() {
  chatWindow.innerHTML = '';
  localStorage.removeItem('chatHistory');
});

function displayMessage(message) {
  const newMessage = document.createElement('p');
  newMessage.textContent = message;
  chatWindow.appendChild(newMessage);
  saveChatHistory();
}

function saveChatHistory() {
  localStorage.setItem('chatHistory', chatWindow.innerHTML);
}

socket.addEventListener('message', function(event) {
  const message = event.data;
  displayMessage(message);
});

socket.addEventListener('error', function(error) {
  console.error('WebSocket Error:', error);
});