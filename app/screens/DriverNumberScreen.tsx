import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import React from 'react';
import { View } from 'react-native';

export interface DriverNumberScreenProps
  extends RootNavigationProps<'DriverNumber'> {}

const DriverNumberScreen: React.FC<DriverNumberScreenProps> = ({}) => {
  return <View />;
};

export default DriverNumberScreen;
