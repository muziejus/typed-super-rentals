import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';

  // Rest parameter 'args' implicitly has an 'any[]' type.
  // @ts-ignore
  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}
