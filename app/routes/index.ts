import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import type Store from '@ember-data/store';

export default class Index extends Route {
  @service declare store: Store;

  async model() {
    return this.store.findAll('rental');
  }
}
