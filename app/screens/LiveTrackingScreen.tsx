import { Box, MapMarker } from '@app/components';
import { RoundedIconButton } from '@app/components/button';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface LiveTrackingScreenProps
  extends RootNavigationProps<'LiveTracking'> {}

const mapStyle = { width: '100%', height: '100%' };

const LiveTrackingScreen: React.FC<LiveTrackingScreenProps> = ({
  navigation,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <Box flex={1}>
      <Box position="absolute" zIndex={9999} top={insets.top + 16} left={20}>
        <RoundedIconButton
          name="arrow-left"
          size={38}
          backgroundColor="darkGrey"
          color="white"
          onPress={navigation.goBack}
        />
      </Box>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={mapStyle as any}
        //25.631118, 88.644354
        region={{
          latitude: 25.622414,
          longitude: 88.643843,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        }}>
        <Marker
          coordinate={{ latitude: 25.633948, longitude: 88.650024 }}
          title="13">
          <MapMarker busNumber="13" />
        </Marker>
        <Marker
          coordinate={{ latitude: 25.631005, longitude: 88.644151 }}
          title="16">
          <MapMarker busNumber="16" />
        </Marker>
        <Marker
          coordinate={{ latitude: 25.628303, longitude: 88.641828 }}
          title="19">
          <MapMarker busNumber="19" />
        </Marker>
      </MapView>
    </Box>
  );
};

export default LiveTrackingScreen;
