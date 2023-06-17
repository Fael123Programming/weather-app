import React from 'react';
import { 
  ActivityIndicator,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useGetWeather } from './src/hooks/useGetWeather';
import Tabs from './src/components/Tabs';

const App = () => {
  const [isLoading, errorMsg, weather] = useGetWeather();

  const { container, errorMsgStyle } = styles;

  const getIconName = _ => {
    if (errorMsg.toLowerCase().includes('location'))
      return 'map';
    else
      return 'alert-triangle';
  };

  if (isLoading)
    return (
      <View style={container}>
        <ActivityIndicator size={'large'} color={'blue'}/>
      </View>
    );
  
  if (errorMsg)
      return (
        <View style={container}>
          <Feather name={getIconName()} size={100} color='red'/>
          <Text style={errorMsgStyle}>{errorMsg}</Text>
        </View>
      );
  
  return (
    <NavigationContainer>
      <Tabs weather={weather}/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorMsgStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default App;
