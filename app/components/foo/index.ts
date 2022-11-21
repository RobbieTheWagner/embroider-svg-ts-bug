import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class FooComponent extends Component {
  @tracked bar = true;

  @action
  updateBar() {
    this.bar = !this.bar;
  }
}
