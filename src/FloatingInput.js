// https://momdo.github.io/html/custom-elements.html
// http://var.blog.jp/archives/80336361.html
((global) => {
  'use strict';

  const CSS_VAR_PREFIX = 'floating-input';
  const CSS = `
:host {
  --main-color: var(--${CSS_VAR_PREFIX}_main-color, #007bff);
  --label-color: var(--${CSS_VAR_PREFIX}_label-color, #999);
  --input-background-color: var(--${CSS_VAR_PREFIX}_input-background-color, transparent);
  --input-background-color-focus: var(--${CSS_VAR_PREFIX}_input-background-color-focus, transparent);

  --top-margin: 10px;

  display: inline-block;
}

*, *::before, *::after {
  box-sizing: border-box;
}

div {
  position: relative;
}

label, input {
  transition: all 0.2s;
  font-size: inherit;
}

label {
  color: var(--label-color);
  font-size: 1em;
  position: absolute;
  left: 5px;
}

input {
  width: 100%;
  border-width: 0;
  border-bottom: 1px solid #999;
  margin-top: calc(var(--top-margin) + 10px);
  padding: 5px;
  background-color: var(--input-background-color);
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
  top: calc(var(--top-margin) + 15px);
}

::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}

input:focus::-webkit-input-placeholder {
  opacity: 1;
}

input:focus {
  background-color: var(--input-background-color-focus);
}

input:not(:placeholder-shown) + label,
input:focus + label {
  color: var(--main-color);
  top: 0;
  cursor: pointer;
  font-size: 8px;
}`;

  class FloatingInput extends HTMLElement {
    static get formAssociated() { return true; }

    constructor() {
      super();
      this._internals = this.attachInternals();
      this._internals.setFormValue('');
      const shadowRoot = this.attachShadow({ mode: 'open' });
      this._createElm(shadowRoot);

      this._value = '';
      this._$input = shadowRoot.querySelector('input');
      this._$label = shadowRoot.querySelector('label');
      this._$input.addEventListener('input', event => {
        this._internals.setFormValue(event.currentTarget.value);
      });
    }

    _createElm(shadowRoot) {
      const styleElm = document.createElement('style');
      styleElm.textContent = CSS;
      shadowRoot.appendChild(styleElm);

      const wrapperElm = document.createElement('div');
      const inputElm = document.createElement('input');
      inputElm.setAttribute('type', 'text');
      inputElm.setAttribute('id', 'floating');
      inputElm.setAttribute('placeholder', '&nbsp;');
      wrapperElm.appendChild(inputElm);

      const labelElm = document.createElement('label');
      labelElm.setAttribute('for', 'floating');
      wrapperElm.appendChild(labelElm);

      shadowRoot.appendChild(wrapperElm);
    }

    static get observedAttributes() {
      return ['label', 'placeholder'];
    }

    // get form() { return this._internals.form; }
    // get name() { return this.getAttribute('name'); }
    // get type() { return this.localName; }
    // get value() { return this._value; }

    attributeChangedCallback(attrName, oldVal, newVal) {
      switch (attrName) {
        case 'label':
          this._setLabel(newVal);
          break;
        case 'placeholder':
          this._setPlaceholder(newVal);
          break;
      }
    }

    _setLabel(label) {
      this._$label.textContent = label;
    }

    _setPlaceholder(placeholder) {
      this._$input.setAttribute('placeholder', placeholder);
    }
  }

  customElements.define('floating-input', FloatingInput);
})(this);
