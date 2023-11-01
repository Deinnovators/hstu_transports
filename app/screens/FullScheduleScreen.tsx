import React, { useEffect, useState } from 'react';
import { api } from '@app/api';
import {
  Box,
  Container,
  LoadingContainer,
  Spacer,
  Text,
  UpcomingCard,
} from '@app/components';
import { useTheme } from '@app/lib/hooks';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import { ScrollView } from 'react-native';

export interface FullScheduleScreenProps
  extends RootNavigationProps<'FullSchedule'> {}

const FullScheduleScreen: React.FC<FullScheduleScreenProps> = ({
  navigation,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const { spacing } = useTheme();

  useEffect(() => {
    api.transports
      .getAllSchedules()
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
        title: 'Full schedule',
        left: {
          icon: 'arrow-left',
          onPress: navigation.goBack,
        },
      }}>
      {loading ? (
        <LoadingContainer />
      ) : (
        <Box flex={1}>
          <ScrollView
            contentContainerStyle={{ padding: spacing.m }}
            showsVerticalScrollIndicator={false}>
            <Text variant="title" mb="m">
              Regular
            </Text>
            <Box flexDirection="row" flexWrap="wrap">
              {data?.regular?.map((sc: any, index: any) => {
                return (
                  <Box key={index} flexDirection="row" mb="s">
                    <UpcomingCard schedule={sc} />
                    <Spacer direction="horinzontal" />
                  </Box>
                );
              })}
            </Box>
            <Spacer space="large" />
            <Text variant="title" mb="m">
              Special
            </Text>
            <Box flexDirection="row" flexWrap="wrap">
              {data?.special?.map((sc: any, index: any) => {
                return (
                  <Box key={index} flexDirection="row" mb="s">
                    <UpcomingCard schedule={sc} />
                    <Spacer direction="horinzontal" />
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

export default FullScheduleScreen;
