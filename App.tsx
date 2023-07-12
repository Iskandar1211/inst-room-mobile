/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {BottomTab} from './src/module/bottom-tab/bottom-tab.component';
import ProductInfo from './src/module/product-info/product-info.component';

type StackNavigationParams = {
  BottomTab: undefined;
  ProductInfo: undefined;
};

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
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
