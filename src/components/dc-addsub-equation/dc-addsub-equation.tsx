import { Component, Host, h, Prop } from '@stencil/core';
import { getRandomInt } from '../../utils/getRandomInt';

@Component({
  tag: 'dc-addsub-equation',
  styleUrl: 'dc-addsub-equation.scss',
  shadow: true,
})
export class DcAddsubEquation {
  @Prop() type: string = '+';
  @Prop() topMax: string = '10';
  @Prop() topMin: string = '0';
  @Prop() bottomMax: string = '10';
  @Prop() bottomMin: string = '0';

  operator: string;
  numbers = [getRandomInt(+this.topMin, +this.topMax), getRandomInt(+this.bottomMin, +this.bottomMax)];

  connectedCallback() {
    const operator = this.type.charAt(Math.floor(Math.random() * this.type.length));
    switch (operator) {
      case '-':
        this.operator = '-';
        this.numbers = this.numbers.sort((a, b) => b - a);
        break;
      case '*':
        this.operator = '×';
        break;
      case '/':
        this.operator = '÷';
        this.numbers = [this.numbers[0] * this.numbers[1], this.numbers[1]].sort((a, b) => b - a);
        break;
      default:
        this.operator = '+';
    }
  }

  render() {
    return (
      <Host>
        <div>{this.numbers[0]}</div>
        <div>
          {this.operator} {this.numbers[1]}
        </div>
        <hr />
      </Host>
    );
  }
}
