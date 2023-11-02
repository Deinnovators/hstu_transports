import { Box } from '@app/components/box';
import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

export interface LoaderProps {}

const Loader: React.FC<LoaderProps> = ({}) => {
  return (
    <Box
      bg="overlay"
      position="absolute"
      // width="100%"
      // height="100%"
      // top={0}
      // left={0}
      // right={0}
      // bottom={0}
      style={StyleSheet.absoluteFill}
      justifyContent="center"
      alignItems="center"
      zIndex={9999999}>
      <ActivityIndicator size="large" color="white" />
    </Box>
  );
};

export default Loader;
