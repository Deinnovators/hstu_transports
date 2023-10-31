import {
  Box,
  Container,
  NumberCard,
  Spacer,
  Visibility,
} from '@app/components';
import { drivers } from '@app/constants/data.constants';
import { useTheme } from '@app/lib/hooks';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import React from 'react';
import { ScrollView } from 'react-native';

export interface DriverNumberScreenProps
  extends RootNavigationProps<'DriverNumber'> {}

const DriverNumberScreen: React.FC<DriverNumberScreenProps> = ({
  navigation,
}) => {
  const { spacing } = useTheme();
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
      <Box flex={1}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ padding: spacing.m }}>
          <Box>
            {drivers.map((d, index) => {
              return (
                <Box key={d.name + index}>
                  <NumberCard name={d.name} phone={d.mobile} />
                  <Visibility on={index < drivers.length}>
                    <Spacer />
                  </Visibility>
                </Box>
              );
            })}
          </Box>
        </ScrollView>
      </Box>
    </Container>
  );
};

export default DriverNumberScreen;
