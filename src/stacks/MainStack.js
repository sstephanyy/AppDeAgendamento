import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import PreLoad from "../screens/Preload";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const Stack = createStackNavigator();

export function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PreLoad" component={PreLoad}/>
            <Stack.Screen name="SignIn" component={SignIn}/>
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}
