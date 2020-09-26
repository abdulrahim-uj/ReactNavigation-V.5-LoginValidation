import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Splash_screen from './SplashScreen';
import Signup_Screen from './SignupScreen';
import Signin_Screen from './SigninScreen';



const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode="none">
        <RootStack.Screen name="Splash" component={Splash_screen} />
        <RootStack.Screen name="Signup" component={Signup_Screen} />
        <RootStack.Screen name="Signin" component={Signin_Screen} />
    </RootStack.Navigator>
)


export default RootStackScreen;