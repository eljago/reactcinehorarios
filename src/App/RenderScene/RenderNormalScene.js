'use strict';

import React from 'react-native'

export default function renderNormalScene(route, navigator) {
  const { title, Component, extraData } = route;

  return (
    <Component
      navigator={navigator}
      name={title}
      extraData={extraData}
    />
  );
}