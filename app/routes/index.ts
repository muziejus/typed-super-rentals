import Route from '@ember/routing/route';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

interface IndexRouteModel {
  id: string;
  attributes: {
    category: string;
  };
}

export default class Index extends Route {
  async model() {
    const response = await fetch('/api/rentals.json');
    const { data } = await response.json();
    return data.map((model: IndexRouteModel) => {
      const { id, attributes } = model;
      let type;
      if (COMMUNITY_CATEGORIES.includes(attributes.category)) {
        type = 'Community';
      } else {
        type = 'Standalone';
      }

      return { id, type, ...attributes };
    });
  }
}
