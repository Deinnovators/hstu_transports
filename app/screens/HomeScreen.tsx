import { Box, Container, MenuItemCard, Spacer, Text } from '@app/components';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import React from 'react';

export interface HomeScreenProps extends RootNavigationProps<'Home'> {}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <Container safeArea>
      <Box padding="m">
        <Text mt="m" textAlign="center" variant="heading3">
          HSTU Transport
        </Text>
        <Text my="s" textAlign="center" variant="comment">
          Get all information you require
        </Text>
        <Box my="m">
          <MenuItemCard
            onPress={() => navigation.navigate('Ongoing')}
            title="Ongoing & upcoming trip"
          />
          <Spacer />
          <MenuItemCard
            onPress={() => navigation.navigate('LiveTracking')}
            title="Live tracking"
            icon="map-pin"
          />
          <Spacer />
          <MenuItemCard
            onPress={() => navigation.navigate('FullSchedule')}
            title="Full schedule"
            icon="file-text"
          />
          <Spacer />
          <MenuItemCard
            onPress={() => navigation.navigate('DriverNumber')}
            title="Driver's numbers"
            icon="phone-call"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HomeScreen;
