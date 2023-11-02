import { api } from '@app/api';
import { Box, MapMarker } from '@app/components';
import Loader from '@app/components/Loader';
import { RoundedIconButton } from '@app/components/button';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import { socket } from '@app/services';
import { useTripStore } from '@app/zustores';
import React, { useEffect, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export interface LiveTrackingScreenProps
  extends RootNavigationProps<'LiveTracking'> {}

const mapStyle = { width: '100%', height: '100%' };

const LiveTrackingScreen: React.FC<LiveTrackingScreenProps> = ({
  navigation,
}) => {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState<boolean>(false);
  const { trips, initTrips } = useTripStore();

  useEffect(() => {
    setLoading(true);
    api.transports
      .getOngoingTrips()
      .then(res => {
        initTrips(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
    socket.init();
    return socket.destroy;
  }, [initTrips]);

  return (
    <Box flex={1}>
      {loading ? <Loader /> : null}
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
        region={{
          latitude: 25.622414,
          longitude: 88.643843,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        }}>
        {trips.map((trip, index) => {
          return (
            <Marker
              key={index}
              coordinate={{
                latitude: trip.currentLat,
                longitude: trip.currentLng,
              }}
              title={trip.schedule.transport.busNumber}>
              <MapMarker busNumber={trip.schedule.transport.busNumber} />
            </Marker>
          );
        })}
      </MapView>
    </Box>
  );
};

export default LiveTrackingScreen;
