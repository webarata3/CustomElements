// https://momdo.github.io/html/custom-elements.html
((global) => {
  'use strict';

  class FloatingInput extends HTMLElement {
    static get formAssociated() { return true; }

    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `
<style>
:host {
  --main-color: var(--floating-input-main-color, #007bff);
}

*, *::before, *::after {
  box-sizing: border-box;
}

div {
  position: relative;
}

label, input {
  transition: all 0.2s;
}

label {
  font-size: 0.8rem;
  position: absolute;
  top: 1em;
  left: 5px;
}

input {
  border-width: 0;
  border-bottom: 1px solid #999;
  margin-top: 1em;
  padding: 10px 5px;
}

input:focus {
  outline: 0;
  border-color: var(--main-color);
}

input:placeholder-shown + label {
  cursor: text;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(0, 0.8em) scale(1.25);
}

::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}

input:focus::-webkit-input-placeholder {
  opacity: 1;
}

input:not(:placeholder-shown) + label,
input:focus + label {
  color: var(--main-color);
  transform: translate(0, -10px) scale(1);
  cursor: pointer;
}
</style>
<div>
 <input type="text" id="floating" placeholder="ああああ">
 <label for="floating">名前</label>
</div>
`;
      this._value = '';
      const $input = shadowRoot.querySelector('input');
      $input.addEventListener('input', event => {
        //    this._setNewDate(event.currentTarget.value);
      });
    }

    static get observedAttributes() {
      return ['value'];
    }

    // get form() { return this._internals.form; }
    // get name() { return this.getAttribute('name'); }
    // get type() { return this.localName; }
    // get value() { return this._value; }

    attributeChangedCallback(attrName, oldVal, newVal) {
      switch (attrName) {
        case 'value':
          this._setDate(newVal);
          break;
      }
    }
  }

  customElements.define('floating-input', FloatingInput);
})(this);
