import { Box } from '@app/components/box';
import React from 'react';
import { ActivityIndicator } from 'react-native';

export interface LoadingContainerProps {}

const LoadingContainer: React.FC<LoadingContainerProps> = ({}) => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <ActivityIndicator />
    </Box>
  );
};

export default LoadingContainer;
