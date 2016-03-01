'use strict';

var cinemas = [
    {
      id: 1,
      name: "Cinemark",
      images: [require('../Images/Cinemark.png')]
    },
    {
      id: 2,
      name: "Hoyts Santiago",
      images: [require('../Images/Hoyts.png')]
    },
    {
      id: 4,
      name: "Hoyts Regiones",
      images: [require('../Images/Hoyts.png')]
    },
    {
      id: 3,
      name: "Cineplanet",
      images: [require('../Images/Cineplanet.png')]
    },
    {
      id: 6,
      name: "Cine Pavilion",
      images: [require('../Images/Pavilion.png')]
    },
    {
      id: 7,
      name: "CineStar",
      images: [require('../Images/CineStar.png')]
    },
    {
      id: 5,
      name: "Independientes",
      images: [
                require('../Images/Normandie.png'), 
                require('../Images/Antay.png'),
                require('../Images/ArteAlameda.png'),
                require('../Images/ElBiografo.png')
              ]
    }
  ];

  module.exports = cinemas;
