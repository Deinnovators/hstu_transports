import { Box, Container, MenuItemCard, Spacer, Text } from '@app/components';
import React from 'react';

export interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = ({}) => {
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
          <MenuItemCard title="Ongoing & upcoming trip" />
          <Spacer />
          <MenuItemCard title="Live Tracking" icon="map-pin" />
          <Spacer />
          <MenuItemCard title="Full Schedule" icon="file-text" />
          <Spacer />
          <MenuItemCard title="Driver's Numbers" icon="phone-call" />
        </Box>
      </Box>
    </Container>
  );
};

export default HomeScreen;
