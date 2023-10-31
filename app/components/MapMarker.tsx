import React from 'react';
import { Box } from '@app/components/box';
import { Text } from '@app/components/text';
import { IconFamily } from '@app/lib/enums';
import Icon from '@app/lib/icons';

export interface MapMarkerProps {
  busNumber: string;
}

const MapMarker: React.FC<MapMarkerProps> = ({ busNumber }) => {
  return (
    <Box>
      <Icon
        size={48}
        color="red"
        family={IconFamily.FontAwesome}
        name="map-pin"
      />
      <Box position="absolute" top={8} left={7}>
        <Text variant="comment" fontWeight="600" color="white">
          {busNumber}
        </Text>
      </Box>
    </Box>
  );
};

export default MapMarker;
