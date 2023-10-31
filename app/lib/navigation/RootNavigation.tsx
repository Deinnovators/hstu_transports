import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootNavigationRoutes } from './navigation.types';
import { HomeScreen, LoginScreen } from '@app/screens';
import { nativeStackOptions } from './navigation.options';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';

export const rootNavigationRef =
  React.createRef<NavigationContainerRef<RootNavigationRoutes>>();

const { Navigator, Screen } =
  createNativeStackNavigator<RootNavigationRoutes>();

const RootNavigation: React.FC = ({}) => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={nativeStackOptions}>
        <Screen name="Login" component={LoginScreen} />
        <Screen name="Home" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
