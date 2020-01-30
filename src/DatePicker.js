// https://momdo.github.io/html/custom-elements.html
((global) => {
  'use strict';

  const CALENDAR_IMG = '<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" class="calendar-icon" xml:space="preserve"><g><path class="st0" d="M149.193,103.525c15.994,0,28.964-12.97,28.964-28.973V28.964C178.157,12.97,165.187,0,149.193,0C133.19,0,120.22,12.97,120.22,28.964v45.589C120.22,90.555,133.19,103.525,149.193,103.525z"></path><path class="st0" d="M362.815,103.525c15.995,0,28.964-12.97,28.964-28.973V28.964C391.78,12.97,378.81,0,362.815,0c-16.002,0-28.972,12.97-28.972,28.964v45.589C333.843,90.555,346.813,103.525,362.815,103.525z"></path><path class="st0" d="M435.164,41.287h-17.925v33.265c0,30.017-24.415,54.432-54.423,54.432c-30.017,0-54.431-24.415-54.431-54.432 V41.287H203.615v33.265c0,30.017-24.414,54.432-54.422,54.432c-30.016,0-54.432-24.415-54.432-54.432V41.287H76.836 c-38.528,0-69.763,31.234-69.763,69.763v331.187C7.073,480.765,38.309,512,76.836,512h358.328 c38.528,0,69.763-31.235,69.763-69.763V111.05C504.927,72.522,473.691,41.287,435.164,41.287z M450.023,429.988 c0,17.826-14.503,32.329-32.329,32.329H94.306c-17.826,0-32.329-14.503-32.329-32.329V170.876h388.047V429.988z"></path><rect x="190.729" y="371.769" class="st0" width="51.191" height="51.192"></rect><rect x="190.729" y="292.419" class="st0" width="51.191" height="51.19"></rect><rect x="111.386" y="371.769" class="st0" width="51.19" height="51.192"></rect><rect x="111.386" y="292.419" class="st0" width="51.19" height="51.19"></rect><rect x="349.423" y="213.067" class="st0" width="51.19" height="51.191"></rect><rect x="270.08" y="213.067" class="st0" width="51.199" height="51.191"></rect><rect x="270.08" y="292.419" class="st0" width="51.199" height="51.19"></rect><rect x="349.423" y="371.769" class="st0" width="51.19" height="51.192"></rect><rect x="349.423" y="292.419" class="st0" width="51.19" height="51.19"></rect><rect x="270.08" y="371.769" class="st0" width="51.199" height="51.192"></rect><rect x="190.729" y="213.067" class="st0" width="51.191" height="51.191"></rect><rect x="111.386" y="213.067" class="st0" width="51.19" height="51.191"></rect></g></svg>';

  const DELETE_IMG = 'data:image/svg+xml;charset=utf8,%3Csvg%20version%3D%221.1%22%20id%3D%22_x32_%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22width%3A%20512px%3B%20height%3A%20512px%3B%20opacity%3A%201%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E.st0%7Bfill%3A%234B4B4B%3B%7D%3C%2Fstyle%3E%3Cg%3E%3Cpolygon%20class%3D%22st0%22%20points%3D%22512%2C52.535%20459.467%2C0.002%20256.002%2C203.462%2052.538%2C0.002%200%2C52.535%20203.47%2C256.005%200%2C459.465%2052.533%2C511.998%20256.002%2C308.527%20459.467%2C511.998%20512%2C459.475%20308.536%2C256.005%20%09%22%20style%3D%22fill%3A%20rgb(75%2C%2075%2C%2075)%3B%22%3E%3C%2Fpolygon%3E%3C%2Fg%3E%3C%2Fsvg%3E%0A';

  class DatePicker extends HTMLElement {
    static get formAssociated() { return true; }

    constructor() {
      super();
      this._internals = this.attachInternals();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `
<style>
:host {
  --component-size: 1rem;
  --clear-button-margin: 3px;
  --primary-color: var(--date-picker-primary-color, #007bff);
  --label-padding-height: 4px;
  --label-padding-width: 4px;
  /* 最後の+2pxはborder（上下）の分 */
  --input-date-height: calc(var(--component-size) + var(--label-padding-height) * 2 + 2px);
}

*, *::before, *::after {
  box-sizing: border-box;
}

.root {
  padding: 0;
  margin: 0;
  height: var(--input-date-height);
  white-space: nowrap;
}

.date {
  position: relative;
  padding: 0;
  margin: 0;
  vertical-align: top;
}

input[type=date] {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  width: 100%;
  height: var(--input-date-height);
  outline: none;
  border: none;
}

input[type=date]::-webkit-inner-spin-button,
input[type=date]::-webkit-clear-button,
input[type=date]::-webkit-datetime-edit {
  -webkit-appearance: none;
  display: none;
}

input[type=date]::-webkit-calendar-picker-indicator,
input[type=date]::-webkit-calendar-picker-indicator:hover {
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  padding: 0;
  margin: 0;
}

label {
  display: inline-flex;
  align-items: center;
  padding: var(--label-padding-height) var(--label-padding-width);
  cursor: pointer;
  border: 1px solid #999;
  border-radius: 3px;
  color: var(--primary-color);
  background-color: #fff;
  vertical-align: top;
}

.view-date {
  font-size: var(--component-size);
  line-height: var(--component-size);
  margin-right: 3px;
}

.view-date:empty {
  margin-right: 0;
}

input:hover ~ label {
  color: #fff;
  background-color: var(--primary-color);
}

.calendar-icon {
  width: var(--component-size);
  height: var(--component-size);
  fill: var(--primary-color);
}

input:hover ~ label > .calendar-icon {
  fill: #ffffff;
}

.clear-button {
  display: none;
}

.selected .clear-button {
  display: inline-block;
  width: var(--input-date-height);
  height: var(--input-date-height);
  background: url('${DELETE_IMG}');
  background-size: calc(var(--component-size) * 0.7) calc(var(--component-size) * 0.7);
  background-repeat: no-repeat;
  background-position: center;
  margin-left: var(--clear-button-margin);
  cursor: pointer;
  vertical-align: top;
  border-radius: 50%;
}

.selected .clear-button:hover {
  background-color: #eee;
}
</style>
<span class="root">
 <span class="date"><input type="date"><label><span class="view-date"></span>${CALENDAR_IMG}</label></span><span class="clear-button"></span>
</span>
`;
      this._value = '';
      const $input = shadowRoot.querySelector('input');
      $input.addEventListener('input', event => {
        this._setNewDate(event.currentTarget.value);
      });
      shadowRoot.querySelector('.clear-button').addEventListener('click', () => {
        this._setNewDate('');
      });
    }

    static get observedAttributes() {
      return ['value'];
    }

    get form() { return this._internals.form; }
    get name() { return this.getAttribute('name'); }
    get type() { return this.localName; }
    get value() { return this._value; }

    attributeChangedCallback(attrName, oldVal, newVal) {
      switch (attrName) {
        case 'value':
          this._setDate(newVal);
          break;
      }
    }

    _setDate(newVal) {
      const checkDate = Date.parse(newVal);
      const $root = this.shadowRoot.querySelector('.root');
      const $label = this.shadowRoot.querySelector('.view-date');
      if (isNaN(checkDate)) {
        $label.textContent = '';
        this._value = '';
        $root.classList.remove('selected');
      } else {
        const parseDate = new Date(checkDate);
        const date = `${parseDate.getFullYear()}-${zeroPadding(
          parseDate.getMonth() + 1
        )}-${zeroPadding(parseDate.getDate())}`;
        this._value = date;
        this.shadowRoot.querySelector('input[type=date]').value = date;
        $root.classList.add('selected');
        $label.textContent = toNormalizeDate(date)
      }
    }

    // 初回以外で日付が変更されたとき
    _setNewDate(newVal) {
      this._internals.setFormValue(newVal);
      this._setDate(newVal);
    }
  }

  function toNormalizeDate(date) {
    return date.replace(/-/g, '/');
  }

  function zeroPadding(num) {
    return String(num).padStart(2, '0');
  }

  customElements.define('date-picker', DatePicker);
})(this);
