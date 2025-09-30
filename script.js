function sendMessage() {
  const input = document.getElementById('message-input');
  const chatWindow = document.getElementById('chat-window');
  if (!input.value.trim()) return;
  const div = document.createElement('div');
  div.className = 'message self';
  div.textContent = input.value;
  chatWindow.appendChild(div);
  input.value = '';
}
function closeReply() {
  document.getElementById('reply-box').style.display = 'none';
}