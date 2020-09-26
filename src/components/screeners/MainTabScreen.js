import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon_IonIcons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home_Screen from './HomeScreen';
import Detail_Screen from './DetailScreen';
import Explore_Screen from './ExploreScreen';
import Profile_Screen from './ProfileScreen';





const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
    >
        <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={
                {
                    tabBarLabel: 'Home',
                    tabBarColor: '#D3DEAB',
                    tabBarIcon: ({ color }) => (
                        <Icon_IonIcons name="ios-home" color={color} size={26} />
                    ),
                }
            }
        />
        <Tab.Screen
            name="Details"
            component={DetailStackScreen}
            options={
                {
                    tabBarLabel: 'Details',
                    tabBarColor: '#7D098F',
                    tabBarIcon: ({ color }) => (
                        <Icon_IonIcons name="ios-notifications" color={color} size={26} />
                    ),
                }
            }
        />
        <Tab.Screen
            name="Explore"
            component={Explore_Screen}
            options={
                {
                    tabBarLabel: 'Explore',
                    tabBarColor:'#0A69E1',
                    tabBarIcon: ({ color }) => (
                        <Icon_IonIcons name="ios-aperture" color={color} size={26} />
                    ),
                }
            }
        />
        <Tab.Screen
            name="Profile"
            component={Profile_Screen}
            options={
                {
                    tabBarLabel: 'Profile',
                    tabBarColor: '#DC8A19',
                    tabBarIcon: ({ color }) => (
                        <Icon_IonIcons name="ios-person" color={color} size={26} />
                    ),
                }
            }
        />
    </Tab.Navigator>
);


export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions= {
        {
            headerStyle: {
                backgroundColor: "#D3DEAB"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }
    } >
        <HomeStack.Screen 
            name="Home"
            component={Home_Screen} 
            options= {
                {
                    title: "Home Screen",
                    headerLeft: () => (
                        <Icon_IonIcons 
                            name="ios-menu"
                            size={25}
                            backgroundColor="#D3DEAB"
                            onPress={
                                () => navigation.openDrawer()
                            }
                            style={
                                {
                                    color: "#fff",
                                    marginLeft: 8,
                                }
                            }
                        />
                    )
                }
            }
        />
        </HomeStack.Navigator>
);

const DetailStackScreen = ({navigation}) => (
    <DetailStack.Navigator screenOptions= {
        {
            headerStyle: {
                backgroundColor: "#7D098F"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }
    } >
        <DetailStack.Screen 
            name="Details"
            component={Detail_Screen}
            options= {
                {
                    title: "Detail Screen",
                    headerLeft: () => (
                        <Icon_IonIcons 
                            name="ios-menu"
                            size={25}
                            backgroundColor="#7D098F"
                            onPress={
                                () => navigation.openDrawer()
                            }
                            style={
                                {
                                    color: "#fff",
                                    marginLeft: 8,
                                }
                            }
                        />
                    )
                }
            }
        />
        </DetailStack.Navigator>
);


