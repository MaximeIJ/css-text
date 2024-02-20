import '../src/css-text';

import '../src/style.css';
import '../src/fonts/monospace.css';

let text = `Each letter uses pseudo-elements' borders to create the shape of the letter.
This allows transitions in the text to appear animated.
Try typing something!`;

document.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {
    const input = document.getElementById('input');
    const preview = document.getElementById('preview');
    if (input && preview) {
      input.textContent = text;
      preview.textContent = text.toUpperCase();
      input.focus();
    }
  });
});

let debounceTimeout: NodeJS.Timeout;

document.getElementById('input')?.addEventListener('input', e => {
  const newText = (e.target as HTMLInputElement).value;
  let preview = document.getElementById('preview');
  if (newText === text) {
    return;
  } else if (preview && newText.length > text.length) {
    // insert dots for new characters
    const diff = newText.length - text.length;
    for (let i = 0; i < diff; i++) {
      text += '.';
    }
    preview.textContent = text.toUpperCase();
  } else if (preview && newText.length < text.length) {
    // replace last characters with dots
    const diff = text.length - newText.length;
    text = text.slice(0, newText.length);
    for (let i = 0; i < diff; i++) {
      text += '.';
    }
    preview.textContent = text.toUpperCase();
  }
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(() => {
    text = newText;
    preview = document.getElementById('preview');
    if (preview) {
      preview.textContent = text.toUpperCase();
    }
  }, 150);
});
