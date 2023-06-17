import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { weatherType } from '../utils/weatherType';
import RowText from '../components/RowText';

const CurrentWeather = ({ weatherData }) => {
  const { 
    wrapper, 
    container, 
    tempStyle, 
    feels, 
    highLowWrapper, 
    highLow, 
    bodyWrapper, 
    description, 
    message 
  } = styles;

  const { main: { temp, feels_like, temp_max, temp_min }, weather } = weatherData;
  const weatherCond = weather[0]?.main;

  return (
    <SafeAreaView 
      style={
        [
          wrapper, 
          {
            backgroundColor: weatherType[weatherCond]?.backgroundColor
          }
        ]
      }
    >
      <View style={container}>
        <Feather name={weatherType[weatherCond]?.icon} size={100} color="white" />
        <Text style={tempStyle}>{Math.round(temp)}°</Text>
        <Text style={feels}>{`Feels like ${Math.round(feels_like)}°`}</Text>
        <RowText
          viewStyle={highLowWrapper}
          upperTextStyle={highLow}
          lowerTextStyle={highLow}
          upperText={`Low: ${Math.round(temp_min)}° `}
          lowerText={`High: ${Math.round(temp_max)}°`}
        />
      </View>
      <RowText
        viewStyle={bodyWrapper}
        upperTextStyle={description}
        lowerTextStyle={message}
        upperText={weather[0]?.description.charAt(0).toUpperCase() + weather[0]?.description.slice(1)}
        lowerText={weatherType[weatherCond]?.message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  container: {
    flex: 1,
    alignItems: 'center', // Horizontally.
    justifyContent: 'center' // Vertically.
  },
  tempStyle: {
    color: 'white',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'white'
  },
  highLow: {
    fontSize: 20,
    color: 'white'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 40,
    color: 'white'
  },
  message: {
    fontSize: 25,
    color: 'white'
  }
});

export default CurrentWeather;
