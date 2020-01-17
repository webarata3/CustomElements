((global) => {
  'use strict';

  const CALENDAR_IMG = 'data:image/svg+xml;charset=utf-8,<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="width: 256px; height: 256px; opacity: 1; fill: @;" xml:space="preserve"><g><path class="st0" d="M149.193,103.525c15.994,0,28.964-12.97,28.964-28.973V28.964C178.157,12.97,165.187,0,149.193,0C133.19,0,120.22,12.97,120.22,28.964v45.589C120.22,90.555,133.19,103.525,149.193,103.525z"></path><path class="st0" d="M362.815,103.525c15.995,0,28.964-12.97,28.964-28.973V28.964C391.78,12.97,378.81,0,362.815,0c-16.002,0-28.972,12.97-28.972,28.964v45.589C333.843,90.555,346.813,103.525,362.815,103.525z"></path><path class="st0" d="M435.164,41.287h-17.925v33.265c0,30.017-24.415,54.432-54.423,54.432c-30.017,0-54.431-24.415-54.431-54.432 V41.287H203.615v33.265c0,30.017-24.414,54.432-54.422,54.432c-30.016,0-54.432-24.415-54.432-54.432V41.287H76.836 c-38.528,0-69.763,31.234-69.763,69.763v331.187C7.073,480.765,38.309,512,76.836,512h358.328 c38.528,0,69.763-31.235,69.763-69.763V111.05C504.927,72.522,473.691,41.287,435.164,41.287z M450.023,429.988 c0,17.826-14.503,32.329-32.329,32.329H94.306c-17.826,0-32.329-14.503-32.329-32.329V170.876h388.047V429.988z"></path><rect x="190.729" y="371.769" class="st0" width="51.191" height="51.192"></rect><rect x="190.729" y="292.419" class="st0" width="51.191" height="51.19"></rect><rect x="111.386" y="371.769" class="st0" width="51.19" height="51.192"></rect><rect x="111.386" y="292.419" class="st0" width="51.19" height="51.19"></rect><rect x="349.423" y="213.067" class="st0" width="51.19" height="51.191"></rect><rect x="270.08" y="213.067" class="st0" width="51.199" height="51.191"></rect><rect x="270.08" y="292.419" class="st0" width="51.199" height="51.19"></rect><rect x="349.423" y="371.769" class="st0" width="51.19" height="51.192"></rect><rect x="349.423" y="292.419" class="st0" width="51.19" height="51.19"></rect><rect x="270.08" y="371.769" class="st0" width="51.199" height="51.192"></rect><rect x="190.729" y="213.067" class="st0" width="51.191" height="51.191"></rect><rect x="111.386" y="213.067" class="st0" width="51.19" height="51.191"></rect></g></svg>';

  const DELETE_IMG = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACxklEQVRYR81XS2sUQRD+qhdW4qpBjMSLT/TgUVDMxeAhqDu9TPCwETx4V/DoweghAY3gVdC/EF30MGz1ogSUeFEUPQoq+LoYjIiPddnATEuHntCZzD5cH5M57c581d83VV/VdBO6vEZGRvrz+bwPYFQIsSuKogEi2mTCtdafhRDzURS9FELcFELMBEHwvZulqRNISrkXwFkAJwH0d8Lb518ATAO4xswv2sW0FSClvGTJNyQWWdBazxHRnM3AIBENAsgncN+siIutRLQUIKW8BaAcBxLR8yiKZoQQqlqtPkhb0PO8gwCKQghfa73PwTxk5uG0mFQBUso3AHbEAVrrK4VCYapSqfzopgTlcnldvV4fJ6LzDn6emTcn41cIkFJ+AjAQA6MoOlqr1e51Q5zESClNBk0m4+stM+90ccsESClnARyKAblcbksQBIt17vXyfX93GIavnPgKM48tlTb+YQ13wSHfEwTB616J3Tjf9wfDMPzo3LvMzIvGXMyAbbVHAGK3jzFz5W+Qx2sUi8UjQoi79r/pjiHTorGA6wBOm4fGcEqp8TRy0xlu+n4X43nelGPMG8x8hnzfXx+G4TsAG02r9fX1Dae53WnLZTV0RXTCmO5oNBqztkW/NpvN7VQqlY5rre/Yt59USk2kuHnZTACwQkRybqRhzLqe510lonOW7xR5njdNRCfsjSGl1ONWqXUHk0vQLblZt1QqHdZa37d8t00GntmULDDzmnbGSyOy+KWJ2erNE6VqmrFtSm4y8J6ItmqtPyiltnVyfooIN6SlP1yQy0lSyjqAtQCeMvOBTgJs2yY9YW53RW7jnwDYD+Bn9gIyL8FqMGHmbegOogml1OR/HUSZj2LbFtl9jFbF59iKMDvgbDYkseky3ZI5IrLblDoistuWOyJ6PZgcE0KM/tHBxBGR3dHMEZHd4dQdyf/qeP4LFHwsDwUnZr8AAAAASUVORK5CYII=';

  class DatePicker extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `
<style>
:host {
  --component-size: 1rem;
  --clear-button-margin: 3px;
  --primary-color: var(--date-picker-primary-color, #007bff);
}

.root {
  position: relative;
  height: var(--component-size);
  display: inline-flex;
  align-items: center;
}

input[type="date"] {
  color: transparent;
  background-color: transparent;
  position: absolute;
  right: 0;
  padding: 0;
  outline: none;
  border: none;
}

.selected input[type="date"] {
  right: calc(var(--component-size) + var(--clear-button-margin));
}

input[type="date"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  display: none;
}

input[type="date"]::-webkit-clear-button {
  -webkit-appearance: none;
  display: none;
}

input[type="date"]::-webkit-datetime-edit {
  display: none;
}

input[type="date"]::-webkit-calendar-picker-indicator,
input[type="date"]::-webkit-calendar-picker-indicator:hover {
  cursor: pointer;
  color: transparent;
  background-color: transparent;
  width: var(--component-size);
  height: var(--component-size);
  padding: 0;
}

label {
  display: inline-flex;
  align-items: center;
  font-size: var(--component-size);
  height: var(--component-size);
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

label::after {
  display: inline-block;
  content: '';
  width: var(--component-size);
  height: var(--component-size);
  background-size: var(--component-size) var(--component-size);
  background-repeat: no-repeat;
  background-position: right;
}

.selected label::after {
  width: calc(var(--component-size) + 0.3rem);
}

.clear-button {
  display: none;
}

.selected .clear-button {
  display: inline-block;
  width: var(--component-size);
  height: var(--component-size);
  background: url(${DELETE_IMG});
  background-size: var(--component-size) var(--component-size);
  background-repeat: no-repeat;
  margin-left: var(--clear-button-margin);
  cursor: pointer;
}
</style>
<span class="root">
 <label></label><input type="date"><span class="clear-button"></span>
</span>
`;
      const primaryColor = global.getComputedStyle(shadowRoot.host).getPropertyValue('--primary-color').trim();
      const calendarImageColor = CALENDAR_IMG.replace('@', getRgbColor(primaryColor));
      const calendarImageColorHover = CALENDAR_IMG.replace('@', getRgbColor('#fff'));
      const backgroundImageStyle = `
<style>
label::after {
   background-image: url('${calendarImageColor}');
}
label:hover::after {
   background-image: url('${calendarImageColorHover}');
}
</style>
      `;
      shadowRoot.innerHTML = shadowRoot.innerHTML + backgroundImageStyle;

      const $input = shadowRoot.querySelector('input');
      $input.addEventListener('change', event => {
        this.setNewDate(event.currentTarget.value);
      });
      shadowRoot.querySelector('.clear-button').addEventListener('click', () => {
        this.setNewDate('');
      });
    }

    static get observedAttributes() {
      return ['rfc3339'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      switch (attrName) {
        case 'rfc3339':
          // ここからセットするのは最初の一回だけ
          this.setDate(newVal);
          break;
      }
    }

    setDate(newVal) {
      const checkDate = Date.parse(newVal);
      const $root = this.shadowRoot.querySelector('.root');
      const $label = this.shadowRoot.querySelector('label');
      if (isNaN(checkDate)) {
        $label.textContent = '';
        $root.classList.remove('selected');
      } else {
        const parseDate = new Date(checkDate);
        const date = `${parseDate.getFullYear()}-${zeroPadding(
          parseDate.getMonth() + 1,
          2
        )}-${zeroPadding(parseDate.getDate(), 2)}`;
        this.shadowRoot.querySelector('input[type=date]').value = date;
        $root.classList.add('selected');
        $label.textContent = `${parseDate.getFullYear()}-${zeroPadding(
          parseDate.getMonth() + 1,
          2
        )}-${zeroPadding(parseDate.getDate(), 2)}`;
      }
    }

    // 初回以外で日付が変更されたとき
    setNewDate(newVal) {
      this.setDate(newVal);
      const rfc3339String = newVal ? `${newVal}T00:00:00.000Z` : '';
      this.dispatchEvent(
        new CustomEvent('dateChange', {
          detail: rfc3339String
        })
      );
    }
  }

  function zeroPadding(num, length) {
    return ('0000000000' + num).slice(-length);
  }

  function getRgbColor(color) {
    const trimColor = color.trim();
    if (trimColor.length === 0) {
      return '';
    }
    if (trimColor.substring(0, 1) !== '#') {
      return trimColor;
    }
    if (trimColor.length === 4) {
      const color1 = trimColor.substring(1, 2);
      const color2 = trimColor.substring(2, 3);
      const color3 = trimColor.substring(3, 4);
      return `rgb(${toDecColor(color1)}, ${toDecColor(color2)}, ${toDecColor(color3)})`
    }
    if (trimColor.length === 7) {
      return `rgb(${toDecColor(trimColor.substring(1, 3))}, ${toDecColor(trimColor.substring(3, 5))}, ${toDecColor(trimColor.substring(5, 7))})`
    }
    return trimColor;
  }

  function toDecColor(hexColor) {
    if (hexColor.length === 2) {
      return parseInt(hexColor, 16);
    }
    return parseInt(hexColor + hexColor, 16);
  }

  customElements.define('date-picker', DatePicker);
})(this);
