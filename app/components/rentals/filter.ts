import Component from '@glimmer/component';

import type Rental from 'typed-super-rentals/models/rental';

interface RentalsFilterComponentArgs {
  rentals: Rental[];
  query: string;
}

export default class RentalsFilterComponent extends Component<RentalsFilterComponentArgs> {
  get results() {
    let { rentals, query } = this.args;
    if (query) {
      rentals = rentals.filter((rental) => rental.title?.includes(query));
    }

    return rentals;
  }
}
