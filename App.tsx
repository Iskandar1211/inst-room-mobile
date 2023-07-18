/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {BottomTab} from './src/module/bottom-tab/bottom-tab.component';
import {DeliveryScreen} from './src/module/delivery-screen/deliveri-screen.component';
import {LoginScreen} from './src/module/login-screen/login-screen.component';
import {PaymentScreen} from './src/module/payment-screen/payment-screen.component';
import {PersonalData} from './src/module/personal-data/personal-data.screen';
import ProductInfo from './src/module/product-info/product-info.component';
import {RegistrationScreen} from './src/module/registration-screen/registration-screen.component';
import {StackNavigationParams} from './types/Model';

function App(): JSX.Element {
  const Stack = createNativeStackNavigator<StackNavigationParams>();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTab">
        <Stack.Screen
          name="BottomTab"
          options={{headerShown: false}}
          component={BottomTab}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="ProductInfo"
          component={ProductInfo}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Registration"
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Delivery"
          component={DeliveryScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Payment"
          component={PaymentScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PersonalData"
          component={PersonalData}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
