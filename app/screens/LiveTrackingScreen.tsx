import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import React from 'react';
import { View } from 'react-native';

export interface LiveTrackingScreenProps
  extends RootNavigationProps<'LiveTracking'> {}

const LiveTrackingScreen: React.FC<LiveTrackingScreenProps> = ({}) => {
  return <View />;
};

export default LiveTrackingScreen;
