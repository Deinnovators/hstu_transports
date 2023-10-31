import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import React from 'react';
import { View } from 'react-native';

export interface FullScheduleScreenProps
  extends RootNavigationProps<'FullSchedule'> {}

const FullScheduleScreen: React.FC<FullScheduleScreenProps> = ({}) => {
  return <View />;
};

export default FullScheduleScreen;
