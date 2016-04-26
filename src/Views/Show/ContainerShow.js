'use strict';

import React, { PropTypes } from 'react-native';
import Relay from 'react-relay';

import ComponentShow from './ComponentShow';

export default class ContainerShow extends React.Component {

  static propTypes = {
    navigator: PropTypes.object,
    show_id: PropTypes.number,
    name: PropTypes.string,
    name_original: PropTypes.string,
    image_url: PropTypes.string,
    information: PropTypes.string,
    debut: PropTypes.string,
    duration: PropTypes.number,
    genres: PropTypes.string,
    imdb_code: PropTypes.string,
    imdb_score: PropTypes.number,
    metacritic_url: PropTypes.string,
    metacritic_score: PropTypes.number,
    rotten_tomatoes_url: PropTypes.string,
    rotten_tomatoes_score: PropTypes.number,
    year: PropTypes.number,
    rating: PropTypes.string,
    portrait_image: PropTypes.object
  };

  render() {
    const {
      show_id,
      name,
      name_original,
      image_url,
      information,
      debut,
      duration,
      genres,
      imdb_code,
      imdb_score,
      metacritic_url,
      metacritic_score,
      rotten_tomatoes_url,
      rotten_tomatoes_score,
      year,
      rating,
      portrait_image
    } = this.props;

    return (
      <ComponentShow
        show_id={show_id}
        name={name}
        name_original={name_original}
        image_url={image_url}
        information={information}
        debut={debut}
        duration={duration}
        genres={genres}
        imdb_code={imdb_code}
        imdb_score={imdb_score}
        metacritic_url={metacritic_url}
        metacritic_score={metacritic_score}
        rotten_tomatoes_url={rotten_tomatoes_url}
        rotten_tomatoes_score={rotten_tomatoes_score}
        year={year}
        rating={rating}
        portrait_image={portrait_image}
      />
    );
  }
}
