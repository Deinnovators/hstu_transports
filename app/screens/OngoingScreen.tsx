import { Box, Container, Text } from '@app/components';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import React from 'react';

export interface OngoingScreenProps extends RootNavigationProps<'Ongoing'> {}

const OngoingScreen: React.FC<OngoingScreenProps> = ({ navigation }) => {
  return (
    <Container
      safeArea
      headerShown
      headerProps={{
        title: 'Ongoing & upcoming trip',
        left: {
          icon: 'arrow-left',
          onPress: navigation.goBack,
        },
      }}>
      <Box flex={1} padding="m">
        <Text>Ongoing</Text>
      </Box>
    </Container>
  );
};

export default OngoingScreen;
