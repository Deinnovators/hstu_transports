import {
  Box,
  BusNumberBox,
  Card,
  Container,
  Spacer,
  Text,
  TextRow,
} from '@app/components';
import { useTheme } from '@app/lib/hooks';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import { hp, screenWidth } from '@app/lib/utils';
import React from 'react';
import { ScrollView } from 'react-native';

export interface FullScheduleScreenProps
  extends RootNavigationProps<'FullSchedule'> {}

const FullScheduleScreen: React.FC<FullScheduleScreenProps> = ({
  navigation,
}) => {
  const { spacing } = useTheme();
  const width = (screenWidth - spacing.m * 2) / 2 - Math.round(hp(1));
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
      <Box flex={1}>
        <ScrollView
          contentContainerStyle={{ padding: spacing.m }}
          showsVerticalScrollIndicator={false}>
          <Text variant="title" mb="m">
            General
          </Text>
          <Box flexDirection="row" flexWrap="wrap">
            <Box flexDirection="row" mb="s">
              <Card width={width} alignItems="center">
                <BusNumberBox busNumber={12} />
                <Spacer space="medium" />
                <TextRow title="Name" value="Students" />
                <Spacer />
                <TextRow title="Time" value="10:30am" />
                <Spacer />
                <TextRow title="From" value="Campus" />
              </Card>
              <Spacer direction="horinzontal" />
              <Card width={width} alignItems="center">
                <BusNumberBox busNumber={17} />
                <Spacer space="medium" />
                <TextRow title="Name" value="Students" />
                <Spacer />
                <TextRow title="Time" value="10:30am" />
                <Spacer />
                <TextRow title="From" value="Campus" />
              </Card>
            </Box>
            <Box flexDirection="row" mb="s">
              <Card width={width} alignItems="center">
                <BusNumberBox busNumber={4} />
                <Spacer space="medium" />
                <TextRow title="Name" value="Students" />
                <Spacer />
                <TextRow title="Time" value="11:00am" />
                <Spacer />
                <TextRow title="From" value="Boro Math" />
              </Card>
              <Spacer direction="horinzontal" />
              <Card width={width} alignItems="center">
                <BusNumberBox busNumber={19} />
                <Spacer space="medium" />
                <TextRow title="Name" value="Students" />
                <Spacer />
                <TextRow title="Time" value="11:00am" />
                <Spacer />
                <TextRow title="From" value="Boro Math" />
              </Card>
            </Box>
            <Box flexDirection="row">
              <Card width={width} alignItems="center">
                <BusNumberBox busNumber={4} />
                <Spacer space="medium" />
                <TextRow title="Name" value="Students" />
                <Spacer />
                <TextRow title="Time" value="11:00am" />
                <Spacer />
                <TextRow title="From" value="Boro Math" />
              </Card>
              <Spacer direction="horinzontal" />
              <Card width={width} alignItems="center">
                <BusNumberBox busNumber={19} />
                <Spacer space="medium" />
                <TextRow title="Name" value="Students" />
                <Spacer />
                <TextRow title="Time" value="11:00am" />
                <Spacer />
                <TextRow title="From" value="Boro Math" />
              </Card>
            </Box>
          </Box>
          <Spacer space="large" />
          <Text variant="title" mb="m">
            Special
          </Text>
          <Box flexDirection="row" flexWrap="wrap">
            <Box flexDirection="row" mb="s">
              <Card width={width} alignItems="center">
                <BusNumberBox busNumber={12} />
                <Spacer space="medium" />
                <TextRow title="Day" value="Friday" />
                <Spacer />
                <TextRow title="Name" value="Teachers" />
                <Spacer />
                <TextRow title="Time" value="10:30am" />
                <Spacer />
                <TextRow title="From" value="Campus" />
              </Card>
              <Spacer direction="horinzontal" />
              <Card width={width} alignItems="center">
                <BusNumberBox busNumber={17} />
                <Spacer space="medium" />
                <TextRow title="Day" value="Friday" />
                <Spacer />
                <TextRow title="Name" value="Teachers" />
                <Spacer />
                <TextRow title="Time" value="10:30am" />
                <Spacer />
                <TextRow title="From" value="Campus" />
              </Card>
            </Box>
            <Box flexDirection="row">
              <Card width={width} alignItems="center">
                <BusNumberBox busNumber={4} />
                <Spacer space="medium" />
                <TextRow title="Day" value="Saturday" />
                <Spacer />
                <TextRow title="Name" value="Students" />
                <Spacer />
                <TextRow title="Time" value="11:00am" />
                <Spacer />
                <TextRow title="From" value="Boro Math" />
              </Card>
              <Spacer direction="horinzontal" />
              <Card width={width} alignItems="center">
                <BusNumberBox busNumber={19} />
                <Spacer space="medium" />
                <TextRow title="Day" value="Saturday" />
                <Spacer />
                <TextRow title="Name" value="Students" />
                <Spacer />
                <TextRow title="Time" value="11:00am" />
                <Spacer />
                <TextRow title="From" value="Boro Math" />
              </Card>
            </Box>
          </Box>
        </ScrollView>
      </Box>
    </Container>
  );
};

export default FullScheduleScreen;
