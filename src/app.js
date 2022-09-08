import Component from './Component.js';
import './style/styles.scss';

window.addEventListener('DOMContentLoaded', () => {
  const targetEl = document.querySelector('#log');

  const service = new Component({targetEl});
  const content = 'hello world';
  const subHtml = service.init(content);

  targetEl.innerHTML += `${subHtml}`;
});
