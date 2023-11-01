import { api } from '@app/api';
import {
  Box,
  Container,
  LoadingContainer,
  NumberCard,
  Spacer,
} from '@app/components';
import { useTheme } from '@app/lib/hooks';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

export interface DriverNumberScreenProps
  extends RootNavigationProps<'DriverNumber'> {}

const DriverNumberScreen: React.FC<DriverNumberScreenProps> = ({
  navigation,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [drivers, setDrivers] = useState<any[]>([]);
  const { spacing } = useTheme();

  useEffect(() => {
    setLoading(true);
    api.transports
      .getDrivers()
      .then(res => {
        setDrivers(res);
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
        title: "Driver's numbers",
        left: {
          icon: 'arrow-left',
          onPress: navigation.goBack,
        },
      }}>
      {loading ? (
        <LoadingContainer />
      ) : (
        <Box flex={1}>
          <FlatList
            data={drivers}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ padding: spacing.m }}
            keyExtractor={(_, index) => _.name + index.toString()}
            renderItem={({ item }) => {
              return (
                <Box>
                  <NumberCard name={item.name} phone={item.mobile} />
                </Box>
              );
            }}
            ItemSeparatorComponent={Spacer}
          />
        </Box>
      )}
    </Container>
  );
};

export default DriverNumberScreen;
