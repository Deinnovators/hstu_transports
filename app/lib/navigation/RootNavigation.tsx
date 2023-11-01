import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { RootNavigationRoutes } from './navigation.types';
import {
  DriverNumberScreen,
  FullScheduleScreen,
  HomeScreen,
  LiveTrackingScreen,
  LoginScreen,
  OngoingScreen,
  StartupScreen,
} from '@app/screens';
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
    <NavigationContainer ref={rootNavigationRef}>
      <Navigator initialRouteName="Startup" screenOptions={nativeStackOptions}>
        <Screen name="Startup" component={StartupScreen} />
        <Screen name="Login" component={LoginScreen} />
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Ongoing" component={OngoingScreen} />
        <Screen name="DriverNumber" component={DriverNumberScreen} />
        <Screen name="FullSchedule" component={FullScheduleScreen} />
        <Screen name="LiveTracking" component={LiveTrackingScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
