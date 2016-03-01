'use strict';

import Cinemas from '../Cinemas'
import Videos from '../Videos'
import Billboard from '../Billboard'
import ComingSoon from '../ComingSoon'
import MapView from '../Map'

module.exports = {
  Cinemas: {
    name: 'Cines',
    component: Cinemas,
    imageName: 'menuiconCinemas'
  },
  Videos: {
    name: 'Videos',
    component: Videos,
    imageName: 'menuiconVideos'
  },
  Billboard: {
    name: 'Cartelera',
    component: Billboard,
    imageName: 'menuiconBillboard'
  },
  ComingSoon: {
    name: 'Próximamente',
    component: ComingSoon,
    imageName: 'menuiconComingSoon'
  },
  MapView: {
    name: 'Cines Cercanos',
    component: MapView,
    imageName: 'menuiconComingSoon'
  }
}