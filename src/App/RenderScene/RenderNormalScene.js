'use strict';

import React from 'react';

export default function renderNormalScene(route, navigator, props = null) {
  const { title, Component, extraData } = route;

  return (
    <Component
      {...props}
      navigator={navigator}
      name={title}
      extraData={extraData}
    />
  );
}