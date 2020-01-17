(global => {
  'use strict';

  const CLOCK_ICON = "data:image/svg+xml;charset=utf-8,%3Csvg version='1.1' id='_x32_' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='width: 256px; height: 256px; opacity: 1;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E	.st0{fill:%234B4B4B;}%3C/style%3E%3Cg%3E%3Cpath class='st0' d='M181.158,225.346l64.826,50.011l0.902,0.517l0.404,0.226c5.606,3.122,13.027,1.467,17.975-3.979l0.432-0.414		l79.452-94.002c4.524-5.07,4.599-12.369,0.198-16.282c-4.411-3.922-11.644-2.981-16.15,2.088l-74.268,79.339l-57.338-39.928		c-5.362-3.95-13.403-2.116-17.947,4.082C175.11,213.184,175.777,221.405,181.158,225.346z' style='fill: rgb(0, 123, 255);'%3E%3C/path%3E%3Cpath class='st0' d='M100.445,255.99c0-3.434,0.075-6.866,0.438-10.234H60.188c-0.249,3.367-0.315,6.8-0.315,10.234		c0,3.499,0.066,6.876,0.315,10.252h40.695C100.52,262.866,100.445,259.442,100.445,255.99z' style='fill: rgb(0, 123, 255);'%3E%3C/path%3E%3Cpath class='st0' d='M172.42,124.797c3.847-2.436,7.774-4.731,11.762-6.772l1.552-0.753l-20.28-35.215		c-5.074,2.558-10.017,5.398-14.814,8.512l20.289,35.234L172.42,124.797z' style='fill: rgb(0, 123, 255);'%3E%3C/path%3E%3Cpath class='st0' d='M82.071,165.44l35.23,20.279l8.527-14.795l-35.244-20.289C87.47,155.432,84.634,160.361,82.071,165.44z' style='fill: rgb(0, 123, 255);'%3E%3C/path%3E%3Cpath class='st0' d='M393.985,327.814c-2.116,3.998-4.341,7.91-6.844,11.701l-1.015,1.486l35.24,20.288		c3.118-4.797,5.958-9.66,8.582-14.73l-35.15-20.355L393.985,327.814z' style='fill: rgb(0, 123, 255);'%3E%3C/path%3E%3Cpath class='st0' d='M118.044,327.748l-0.814-1.543l-35.159,20.28c2.502,5.07,5.398,10.008,8.512,14.805l35.244-20.288		l-1.026-1.486C122.371,335.724,120.076,331.812,118.044,327.748z' style='fill: rgb(0, 123, 255);'%3E%3C/path%3E%3Cpath class='st0' d='M172.42,387.127l-1.491-1.015l-20.289,35.243c4.798,3.114,9.74,6.02,14.814,8.588l20.28-35.234l-1.552-0.752		C180.193,391.924,176.266,389.629,172.42,387.127z' style='fill: rgb(0, 123, 255);'%3E%3C/path%3E%3Cpath class='st0' d='M326.214,117.216l14.81,8.588l20.284-35.234c-4.793-3.114-9.674-5.954-14.73-8.512L326.214,117.216z' style='fill: rgb(0, 123, 255);'%3E%3C/path%3E%3Cpath class='st0' d='M245.771,411.121v40.644c3.377,0.3,6.8,0.366,10.229,0.366c3.442,0,6.871-0.066,10.238-0.366v-40.644v-0.423		h-20.467V411.121z' style='fill: rgb(0, 123, 255);'%3E%3C/path%3E%3Cpath class='st0' d='M266.238,100.878V60.235c-3.367-0.302-6.796-0.367-10.238-0.367c-3.429,0-6.852,0.065-10.229,0.367v40.643		v0.423h20.467V100.878z' style='fill: rgb(0, 123, 255);'%3E%3C/path%3E%3Cpath class='st0' d='M326.214,394.774l20.364,35.168c5.056-2.643,9.937-5.474,14.73-8.588l-20.284-35.243L326.214,394.774z' style='fill: rgb(0, 123, 255);'%3E%3C/path%3E%3Cpath class='st0' d='M429.948,165.44c-2.572-5.079-5.465-10.007-8.582-14.805l-35.24,20.289l8.601,14.795L429.948,165.44z' style='fill: rgb(0, 123, 255);'%3E%3C/path%3E%3Cpath class='st0' d='M451.826,245.757h-40.69h-0.423v20.486h0.423h40.69c0.254-3.376,0.311-6.8,0.311-10.252		C452.136,252.557,452.08,249.124,451.826,245.757z' style='fill: rgb(0, 123, 255);'%3E%3C/path%3E%3Cpath class='st0' d='M256,0C114.606,0.009,0.014,114.61,0.005,256C0.014,397.39,114.606,511.99,256,512		c141.394-0.01,255.986-114.61,255.995-256C511.986,114.61,397.394,0.009,256,0z M256,478.966		c-61.627-0.01-117.268-24.926-157.661-65.305C57.964,373.254,33.043,317.617,33.038,256c0.005-61.618,24.926-117.263,65.3-157.652		C138.732,57.958,194.373,33.042,256,33.033c61.618,0.01,117.258,24.926,157.661,65.315c40.375,40.389,65.296,96.024,65.3,157.652		c-0.005,61.617-24.926,117.254-65.3,157.661C373.258,454.041,317.618,478.957,256,478.966z' style='fill: rgb(0, 123, 255);'%3E%3C/path%3E%3C/g%3E%3C/svg%3E";

  const INPUT_ANIMATION_MILLS = 200;
  const INIT_MESSAGE = '時刻の設定';

  class TimePicker extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `
  <style>
  :host {
    box-sizing: box-sizing;
    --component-size: 1rem;
    --primary-color: #007bff;
    --font-monospace: monospace;
  }

  .background {
    display: none;
  }

  .background.choosing {
    z-index: 5;
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0006;
  }

  .root {
    position: relative;
  }

  label {
    display: inline-block;
    cursor: pointer;
    padding: 2px 8px;
    border: 1px solid #999;
    border-radius: 3px;
    color: var(--primary-color);
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

  .dialog {
    display: none;
  }

  .dialog.choosing {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    padding: 15px;
    border-radius: 5px;
    z-index: 10;
  }

  .input {
    margin-bottom: 10px;
  }

  input {
    background-color: #fff;
    transition: background-color ${INPUT_ANIMATION_MILLS}ms 0s ease;
  }

  input.active {
    background-color: #f3efa7;
    transition: background-color ${INPUT_ANIMATION_MILLS}ms 0s ease;
  }

  /* https://codepen.io/sebj54/pen/oxluI */
  .button {
    cursor: pointer;
    position: relative;
    padding: 0;
    overflow: hidden;
    border-width: 0;
    outline: none;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .6);
    background-color: #2ecc71;
    color: #ecf0f1;
    transition: background-color .3s;
  }

  .button:hover, .button:focus {
    background-color: #27ae60;
  }

  .button > * {
    position: relative;
  }

  .button span {
    display: block;
    padding: 3px 10px;
  }

  .button:before {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0;
    padding-top: 0;
    border-radius: 100%;
    background-color: rgba(236, 240, 241, .3);
    transform: translate(-50%, -50%);
  }

  .button:active:before {
    width: 120%;
    padding-top: 120%;

    transition: width .2s ease-out, padding-top .2s ease-out;
  }

  .button.cancel {
    background-color: #dc3545;
  }

  .button.ok {
    background-color: #007bff;
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
    border-radius: 50%;
    padding: 4px;
    margin: 3px;
  }

  .hour-buttons > div:hover, .minute-buttons > div:hover {
    cursor: pointer;
    color: #fff;
    background-color: var(--primary-color);
  }
  </style>
  <div class="background"></div>
  <span class="root">
   <label>時刻の設定</label>
   <div class="dialog">
    <div class="input">
     <input type="time">
     <button id="cancel-button" class="button cancel"><span>キャンセル</span></button>
     <button id="ok-button" class="button ok"><span>OK</span></button>
    </div>
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
      this._initTime = '';
      this._$label = shadowRoot.querySelector('label');
      this._$input = shadowRoot.querySelector('input');
      this._$dialog = shadowRoot.querySelector('.dialog');
      this._$background = shadowRoot.querySelector('.background');
      this._$label.addEventListener('click', () => {
        this._$label.classList.add('choosing');
        this._$dialog.classList.add('choosing');
        this._$background.classList.add('choosing');
      });
      this._$background.addEventListener('click', e => {
        if (e.target !== this) {
          this._cancel();
        }
      });
      shadowRoot.querySelector('#ok-button').addEventListener('click', () => {
        this._ok();
      });
      shadowRoot.querySelector('#cancel-button').addEventListener('click', () => {
        this._cancel();
      });
      shadowRoot.querySelectorAll('.hour-buttons > div').forEach(button => {
        button.addEventListener('click', e => {
          this._activeInput();
          this._setHour(button.textContent);
        });
      });
      shadowRoot.querySelectorAll('.minute-buttons > div').forEach(button => {
        button.addEventListener('click', () => {
          this._activeInput();
          this._setMinute(button.textContent);
        });
      });
    }

    _ok() {
      this._initTime = this._$input.value;
      this._setTime(this._initTime);
      this._closeDialog();
    }

    _cancel() {
      this._setTime(this.initTime);
      this._closeDialog();
    }

    _closeDialog() {
      this._$label.classList.remove('choosing');
      this._$dialog.classList.remove('choosing');
      this._$background.classList.remove('choosing');
    }

    static get observedAttributes() {
      return ['value'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      switch (attrName) {
        case 'value':
          const result = newVal.match(/^([01]?[0-9]|2[0-3]):([0-5][0-9])$/);
          if (result === null) {
            this._initTime = '';
          } else {
            this._initTime = `${result[1].padStart('0', 2)}:${result[2].padStart('0', 2)}`;
          }
          this._setTime(this._initTime);
          break;
      }
    }

    _activeInput() {
      if (this._timer) {
        clearTimeout(this._timer);
      }

      const event = new MouseEvent('click');
      this._$input.dispatchEvent(event);
      this._$input.classList.add('active');
      this._timer = setTimeout(() => {
        this._$input.classList.remove('active');
      }, INPUT_ANIMATION_MILLS);
    }

    _setTime(time) {
      this._$input.value = time;
      if (time.length === 0) {
        this._$label.textContent = INIT_MESSAGE;
      } else {
        this._$label.textContent = time;
      }
    }

    _setHour(hour) {
      const padHour = hour.padStart(2, '0');
      const times = this._$input.value.split(':');
      if (times.length === 2) {
        this._setTime(`${padHour}:${times[1]}`);
      } else {
        this._setTime(`${padHour}:00`);
      }
    }

    _setMinute(minute) {
      const padMinute = minute.padStart(2, '0');
      const times = this._$input.value.split(':');
      if (times.length === 2) {
        this._setTime(`${times[0]}:${padMinute}`);
      } else {
        this._setTime(`00:${padMinute}`);
      }
    }
  }

  customElements.define('time-picker', TimePicker);
})(this);
