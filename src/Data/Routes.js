'use strict';

import Cinemas from '../Views/Cinemas'
import Videos from '../Views/Videos'
import Billboard from '../Views/Billboard'
import ComingSoon from '../Views/ComingSoon'
import MapView from '../Views/Map'

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