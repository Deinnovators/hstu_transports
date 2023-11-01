import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  LoadingContainer,
  NoCard,
  OngoingCard,
  Spacer,
  Text,
  UpcomingCard,
  Visibility,
} from '@app/components';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import { ScrollView } from 'react-native';
import { api } from '@app/api';

export interface OngoingScreenProps extends RootNavigationProps<'Ongoing'> {}

const OngoingScreen: React.FC<OngoingScreenProps> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(undefined);

  useEffect(() => {
    setLoading(true);
    api.transports
      .getOngoingUpcoming()
      .then(res => {
        setData(res);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

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
      {loading ? (
        <LoadingContainer />
      ) : (
        <Box flex={1} padding="m">
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text variant="title" mb="s">
              Ongoing
            </Text>
            <Visibility on={!data?.ongoing?.length}>
              <NoCard title="No ongoing trip at this moment" />
            </Visibility>
            {data?.ongoing?.map((trip: any) => {
              return <OngoingCard trip={trip} key={trip.id} />;
            })}
            <Text variant="title" mt="m" mb="s">
              Upcoming
            </Text>
            <Visibility on={!data?.upcoming?.length}>
              <NoCard title="No upcoming trip at this moment" />
            </Visibility>
            <Box flexDirection="row" flexWrap="wrap">
              {data?.upcoming.map((up: any, index: number) => {
                return (
                  <Box key={up.id + up.time} mb="s" flexDirection="row">
                    <UpcomingCard schedule={up} />
                    <Visibility on={index % 2 === 0}>
                      <Spacer direction="horinzontal" />
                    </Visibility>
                  </Box>
                );
              })}
            </Box>
          </ScrollView>
        </Box>
      )}
    </Container>
  );
};

export default OngoingScreen;
