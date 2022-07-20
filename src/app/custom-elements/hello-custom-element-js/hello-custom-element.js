class Mycomponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Hello world from custom elements</h1>`;
  }
}

window.customElements.define("my-component", Mycomponent);
