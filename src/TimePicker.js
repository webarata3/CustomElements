(global => {
  'use strict';

  class TimePicker extends HTMLElement {
    constructor() {
      super();
      // 日付が未来の場合強調するか
      this.emError = false;
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `
  <style>
  :host {
    box-sizing: box-sizing;
    --component-size: 1rem;
    --primary-color: #007bff;
    --font-monospace: monospace;
  }

  .root {
    position: relative;
  }

  label {
    display: inline-block;
    cursor: pointer;
    padding: 3px 8px;
    border: 1px solid #333;
    border-radius: 3px;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    background-color: #fff;
  }

  label:hover {
    color: #fff;
    background-color: var(--primary-color);
  }

  label.choosing {
    border-color: transparent;
    color: transparent;
    background-color: transparent;
  }

  .selector {
    display: none;
  }

  .selector.choosing {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    border: 1px solid #999;
    padding: 5px;
    box-shadow: 0 0 5px #666;
  }

  .pick {
    display: flex;
    align-items: flex-start;
  }

  .pick > div:first-child {
    margin-right: 5px;
  }

  .hour, .minute {
    border: 1px solid var(--primary-color);
  }

  .hour-title, .minute-title {
    background-color: var(--primary-color);
    color: #fff;
    text-align: center;
  }

  .hour-buttons {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    font-family: var(--font-monospace);
  }

  .minute-buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    font-family: var(--font-monospace);
  }
  
  .hour-buttons > div, .minute-buttons > div {
    text-align: right;
    border-bottom: 3px solid transparent;
    padding: 2px;
    margin: 2px;
  }

  .hour-buttons > div:hover, .minute-buttons > div:hover {
    cursor: pointer;
    border-bottom: 3px solid var(--primary-color);
  }
  </style>
  <span class="root">
   <label>時刻の設定</label>
   <div class="selector">
    <input type="time">
    <div class="pick">
     <div class="hour">
      <div class="hour-title">時</div>
      <div class="hour-buttons">
       <div>0</div>
       <div>1</div>
       <div>2</div>
       <div>3</div>
       <div>4</div>
       <div>5</div>
       <div>6</div>
       <div>7</div>
       <div>8</div>
       <div>9</div>
       <div>10</div>
       <div>11</div>
       <div>12</div>
       <div>13</div>
       <div>14</div>
       <div>15</div>
       <div>16</div>
       <div>17</div>
       <div>18</div>
       <div>19</div>
       <div>20</div>
       <div>21</div>
       <div>22</div>
       <div>23</div>
      </div>
     </div>
     <div class="minute">
      <div class="minute-title">分</div>
      <div class="minute-buttons">
       <div>0</div>
       <div>5</div>
       <div>10</div>
       <div>15</div>
       <div>20</div>
       <div>25</div>
       <div>30</div>
       <div>35</div>
       <div>40</div>
       <div>45</div>
       <div>50</div>
       <div>55</div>
      </div>
     </div>
    </div>
   </div>
  </span>
  `;
      this.isViewSelector = false;
      this.$label = shadowRoot.querySelector('label');
      this.$input = shadowRoot.querySelector('input');
      this.$selector = shadowRoot.querySelector('.selector');
      this.$label.addEventListener('click', () => {
        console.log(this.isViewSelector);
        if (this.isViewSelector) {

        } else {
          this.$label.classList.add('choosing');
          this.$selector.classList.add('choosing');
        }
        this.isViewSelector = !this.isViewSelector;
      });
    }

    static get observedAttributes() {
      return ['value'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      switch (attrName) {
        case 'rfc3339':
          break;
      }
    }
  }

  customElements.define('time-picker', TimePicker);
})(this);
