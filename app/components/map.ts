import Component from '@glimmer/component';
import ENV from 'typed-super-rentals/config/environment';

interface MapComponentArgs {
  lat: string | number;
  lng: string | number;
  zoom: string | number;
  width: string | number;
  height: string | number;
}

const MAPBOX_API: string =
  'https://api.mapbox.com/styles/v1/mapbox/streets-v11/static';

export default class MapComponent extends Component<MapComponentArgs> {
  get src(): string {
    let { lng, lat, width, height, zoom } = this.args;

    let coordinates = `${lng},${lat},${zoom}`;
    let dimensions = `${width}x${height}`;
    let accessToken = `access_token=${this.token}`;

    return `${MAPBOX_API}/${coordinates}/${dimensions}@2x?${accessToken}`;
  }

  get token(): string {
    return encodeURIComponent(ENV.MAPBOX_ACCESS_TOKEN);
  }
}
