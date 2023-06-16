import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    FlatList,
    StatusBar,
    Dimensions,
    ImageBackground
} from 'react-native';
import WeatherItem from '../components/WeatherItem';

const weatherData = [
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'clear'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 15:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'clear'
            }
        ]
    },
    {
        dt_txt: "2023-02-18 18:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [
            {
                main: 'clear'
            }
        ]
    },
];

const renderItem = ({item}) => (
    <WeatherItem 
        dt_txt={item.dt_txt} 
        min={item.main.temp_min} 
        max={item.main.temp_max}
        condition={item.weather[0].main}
    />
);

const UpcomingWeather = () => {

    const { container, image} = styles;

    return (
        <SafeAreaView style={container}>
            <ImageBackground
                source={require('../../assets/upcoming-weather.jpg')}
                style={image}
            >
                <Text style={{textAlign: 'center'}}>Upcoming Weather</Text>
                <FlatList
                    data={weatherData}
                    renderItem={renderItem}
                    keyExtractor={item => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight || 0,
    },
    image: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    }
});

export default UpcomingWeather;
