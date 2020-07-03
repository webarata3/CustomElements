(global => {
  'use strict';

  const SVG_NS = 'http://www.w3.org/2000/svg';

  const DEFAULT_BASE_LINE_LENGTH = 200;
  const DEFAULT_BASE_LINE_SPLIT = 3;

  function createLineElm(x1, y1, x2, y2, color, strokeWidth = 1) {
    const $line = document.createElementNS(SVG_NS, 'line');
    $line.setAttribute('x1', x1);
    $line.setAttribute('y1', y1);
    $line.setAttribute('x2', x2);
    $line.setAttribute('y2', y2);
    $line.setAttribute('stroke', color);
    $line.setAttribute('stroke-width', strokeWidth);
    return $line;
  }

  function createPolygonElm(points, strokeColor, fillColor, strokeWidth = 1) {
    const $p = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    $p.setAttribute('points', points);
    $p.setAttribute('stroke', strokeColor);
    $p.setAttribute('fill', fillColor);
    $p.setAttribute('stroke-width', 1);
    return $p
  }

  function angleToRadian(angle) {
    return angle * Math.PI / 180;
  }

  class RadarChart extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"></svg>`;
      this._$svg = shadowRoot.querySelector('svg');
      this._initSvgSize();
      this._initTitles();
      this._initValues();

      this._drawBaseLines();
      this._drawValues();
    }

    _initSvgSize() {
      this._width = this.getAttribute('width');
      this._height = this.getAttribute('height');
      this._$svg.setAttribute('width', this._width);
      this._$svg.setAttribute('height', this._height);

      this._center = {
        x: Math.floor(parseInt(this._width) / 2),
        y: Math.floor(parseInt(this._height) / 2)
      }
    }

    _initTitles() {
      this._titles = this.getAttribute('titles').split(',');
    }

    _initValues() {
      this._values = this.getAttribute('values').split(',').map(v => parseInt(v, 10));
      this._valueCount = this._values.length;
      this._valueAngle = 360 / this._valueCount;
    }

    _getPosByAngle(angle, length) {
      return {
        x: Math.floor(Math.cos(angleToRadian(angle - 90)) * length) + this._center.x,
        y: Math.floor(Math.sin(angleToRadian(angle - 90)) * length) + this._center.y
      };
    }

    _drawBaseLines() {
      for (let i = 0; i < this._valueCount; i++) {
        const pos = this._getPosByAngle(this._valueAngle * i, DEFAULT_BASE_LINE_LENGTH);
        const $l = createLineElm(this._center.x, this._center.y, pos.x, pos.y, '#333');
        this._$svg.appendChild($l);
      }

      for (let i = 0; i < DEFAULT_BASE_LINE_SPLIT; i++) {
        const SPLIT_LENGTH = DEFAULT_BASE_LINE_LENGTH / DEFAULT_BASE_LINE_SPLIT * (DEFAULT_BASE_LINE_SPLIT - i);
        const positions = [];
        for (let j = 0; j < this._valueCount; j++) {
          const pos = this._getPosByAngle(this._valueAngle * j, SPLIT_LENGTH);
          positions.push(`${pos.x},${pos.y}`);
        }
        const $p = createPolygonElm(positions.join(' '), '#ccc', 'transparent');
        this._$svg.appendChild($p);
      }
    }

    _drawValues() {
      const positions = [];
      for (let i = 0; i < this._valueCount; i++) {
        const pos = this._getPosByAngle(this._valueAngle * i, this._values[i]);
        positions.push(`${pos.x},${pos.y}`);
      }
      const $p = createPolygonElm(positions.join(' '), '#f00', '#f006');
      this._$svg.appendChild($p);
    }

    static get observedAttributes() {
      return ['values'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      switch (attrName) {
        case 'values':
          break;
      }
    }
  }

  customElements.define('radar-chart', RadarChart);
})(this);
