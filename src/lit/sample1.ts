import {LitElement, css, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@google-web-components/google-chart';

@customElement('simple-greeting')
export class SimpleGreeting extends LitElement {
  static styles = css`
    :host {
      color: blue;
    }
    google-chart {
      width: 100%;
    }
  `;

  @property()
  name?: string = 'World';

  render() {
    return html`
      <google-chart
        data='[["day", "${this.name}"],["1/1", 0],["1/2", 10],["1/3", 23],["1/4", 17],["1/5", 18],["1/6", 9]]'
        type='line'
        options='{"title": "オーナ数"}'
      ></google-chart>
    `;
  }
}

