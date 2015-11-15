'use strict';

var store = require('react-native-simple-store');

var STORAGE_KEY = '@CineHorariosApp:FavoriteTheaters';

module.exports = {
  load: function() {
    return store.get(STORAGE_KEY).then((favorites) => {
      if (favorites != null) {
        return favorites;
      }
      else {
        store.save(STORAGE_KEY, {});
        return {};
      }
    });
  },

  add: function(theaterID, theaterName) {
    store.get(STORAGE_KEY).then((favorites) => {
      if (favorites != null) {
          favorites[theaterID] = {id: theaterID, name: theaterName};
          store.save(STORAGE_KEY, favorites);
      }
      else {
        var favorites = {};
        favorites[theaterID] = {id: theaterID, name: theaterName};
        store.save(STORAGE_KEY, favorites);
      }
    });
  },

  remove: function(theaterID) {
    store.get(STORAGE_KEY).then((favorites) => {
      if (favorites != null) {
        if (favorites[theaterID] != null) {
          favorites[theaterID] = null;
          store.save(STORAGE_KEY, favorites);
        }
      }
      else {
        store.save(STORAGE_KEY, {});
      }
    });
  },

  removeAll: function() {
    store.save(STORAGE_KEY, null);
  }
}