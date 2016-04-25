'use strict';

import React, {
  PropTypes,
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';

import {colors} from '../../Data';
import {ImageHelper} from '../../Utils'

export default class ContainerShow extends React.Component{

  static propTypes = {
    show: PropTypes.object
  };

  render() {
    const {show} = this.props;

    if (show) {
      const {
        image_url,
        portrait_image,
        name,
        genres,
        information,
        year,
        rating,
        name_original,
        people,
        images
      } = show;

      return(
        <ScrollView>
          <Image
            resizeMode='cover'
            style={styles.portraitImage}
            source={{uri: ImageHelper.addPrefixToPath(portrait_image.image_url, 'smaller_')}}
          >
            <View style={styles.portraitView}>
              <Text style={styles.title}>
                {name}
              </Text>
              <View style={styles.portraitViewRow}>
                <Image
                  resizeMode='stretch'
                  style={styles.coverImage}
                  source={{uri: ImageHelper.addPrefixToPath(image_url, 'smaller_')}}
                />
                <Text style={styles.textDetails}>
                  {name_original ? `${name_original}\n` : null}
                  {year ? `${year}\n` : null}
                  {rating ? `${rating}\n` : null}
                  {genres ? `${genres}\n` : null}
                </Text>
              </View>
            </View>
          </Image>

          <Text style={styles.information}>
            {information}
          </Text>

          <ScrollViewhorizontal={true}>
            {people.map((obj) => {
              return <Text key={obj.person_id}>{obj.name}</Text>;
            })}
          </ScrollView>

          <ScrollView horizontal={true}>
            {images.map((obj) => {
              return(
                <Image 
                  key={obj.image_id}
                  resizeMode='stretch' 
                  style={styles.coverImage}
                  source={{uri: ImageHelper.addPrefixToPath(obj.image_url, 'smaller_')}}
                />
              );
            })}
          </ScrollView>
        </ScrollView>
      );
    }
    else {
      return(
        <View />
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  portraitImage: {
    height: Dimensions.get('window').width * 720 / 1280,
    width: Dimensions.get('window').width
  },
  portraitView: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  portraitViewRow: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 10,
    marginTop: 10
  },
  textDetails: {
    marginLeft: 10,
    fontSize: 14,
    color: 'white',
  },
  coverImage: {
    width: 80,
    height: 120,
    shadowColor: 'black',
    shadowRadius: 3,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0, height: 0
    },
  },
  title: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 20,
    fontSize: 20,
    color: 'white',
  },
  information: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 14
  }
});
