import Component from './Component.js';
import {requestTest} from './js/requestTest.js';
import './style/styles.scss';

window.addEventListener('DOMContentLoaded', async () => {
  const targetEl = document.querySelector('#log');

  const service = new Component({targetEl});
  const content = 'hello world';
  // const content = await requestTest();
  const subHtml = service.init(content);

  targetEl.innerHTML += `${subHtml}`;
});
