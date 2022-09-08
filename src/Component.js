export default class Component {
  constructor({targetEl}) {
    this.targetEl = targetEl;
  }

  init(content) {
    return this.render(content);
  }

  render(data) {
    return `<span>${data}</span>`;
  }
}
