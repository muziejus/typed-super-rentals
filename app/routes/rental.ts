import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import type Store from '@ember-data/store';

interface RentalRouteParams {
  rental_id: string;
}

export default class RentalRoute extends Route {
  @service declare store: Store;

  async model(params: RentalRouteParams) {
    return this.store.findRecord('rental', params.rental_id);
  }
}
