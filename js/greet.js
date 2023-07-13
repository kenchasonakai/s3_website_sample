window.addEventListener('DOMContentLoaded', function() {
  const greetButton = document.getElementById('greetButton');
  const greetInput = document.getElementById('greetInput');
  const greet = document.getElementById('greet');
  greetButton.addEventListener('click', function() {
    greet.innerHTML = greetInput.value + 'さん、こんにちは！';
  });
})
