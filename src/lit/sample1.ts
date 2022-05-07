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

  @property({attribute: false})
  hoge: string = 'b';

  async getData() {
    const response = await fetch(
      'https://d2gye820k6mno1.cloudfront.net/public/azuki/collections/2022-04-24.json'
    ).catch(() => {
      return Response.error();
    });
    if (!response.ok) {
      return undefined;
    }
    const data = await response
      .json()
      .catch(() => {
        return undefined;
      });
    if (!data) {
      return undefined;
    }
    return data;
  }

  constructor() {
    super();
    console.log('a');
    console.log(this.getData().then(data => {
      console.log(data);
      this.hoge = 'c';
    }));
  }

  render() {
    return html`
      <p>${this.hoge}</p>
      <google-chart
        data='[["day", "${this.name}"],["1/1", 0],["1/2", 10],["1/3", 23],["1/4", 17],["1/5", 18],["1/6", 9]]'
        type='line'
        options='{"title": "オーナ数"}'
      ></google-chart>
    `;
  }
}

