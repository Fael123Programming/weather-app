import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CurrentWeather from '../screens/CurrentWeather';
import UpcomingWeather from '../screens/UpcomingWeather';
import City from '../screens/City';
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();

const Tabs = props => {
    const { weather } = props;

    return (
        <Tab.Navigator
            initialRouteName='CurrentWeather'
            screenOptions={
                {
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'grey',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 25,
                        color: 'tomato'
                    },
                    headerTitleAlign: 'center'
                }
            }
        >
            <Tab.Screen
                name={'CurrentWeather'}
                options={
                    {
                        headerTitle: 'Current Weather',
                        tabBarIcon: ({focused}) => <Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'grey'}/>,
                        tabBarLabel: 'Current Weather'
                    }
                }
            >
                {() => <CurrentWeather weatherData={weather?.list[0]}/>}
            </Tab.Screen>
            <Tab.Screen
                name={'UpcomingWeather'}
                options={
                    {
                        headerTitle: 'Upcoming Weather',
                        tabBarIcon: ({focused}) => <Feather name={'clock'} size={25} color={focused ? 'tomato' : 'grey'}/>,
                        tabBarLabel: 'Upcoming Weather'
                    }
                }
            >
                {() => <UpcomingWeather weatherData={weather?.list}/>}
            </Tab.Screen>
            <Tab.Screen
                name={'City'}
                options={
                    {
                        tabBarIcon: ({focused}) => <Feather name={'home'} size={25} color={focused ? 'tomato' : 'grey'}/>
                    }
                }
            >
                {() => <City cityData={weather.city}/>}
            </Tab.Screen>
        </Tab.Navigator>
    );
};

export default Tabs;
