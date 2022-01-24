import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type Rental from 'typed-super-rentals/models/rental';

interface RentalsComponentArgs {
  rentals: Rental[];
}

export default class RentalsComponent extends Component<RentalsComponentArgs> {
  @tracked query = '';
}
