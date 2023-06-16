import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../components/RowText';

const CurrentWeather = () => {
  const { wrapper, container, temp, feels, highLowWrapper, highLow, bodyWrapper, description, message } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <RowText
          viewStyle={highLowWrapper}
          upperTextStyle={highLow}
          lowerTextStyle={highLow}
          upperText={'High: 8 '}
          lowerText={'Low: 6'}
        />
      </View>
      <RowText
        viewStyle={bodyWrapper}
        upperTextStyle={description}
        lowerTextStyle={message}
        upperText={'It\'s sunny'}
        lowerText={'It\'s perfect t-shirt weather'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'pink',
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  container: {
    flex: 1,
    alignItems: 'center', // Horizontally.
    justifyContent: 'center' // Vertically.
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    fontSize: 20,
    color: 'black'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
});

export default CurrentWeather;
