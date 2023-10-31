import {
  Box,
  Card,
  Container,
  Spacer,
  Text,
  TextRow,
  Visibility,
} from '@app/components';
import { useTheme } from '@app/lib/hooks';
import { RootNavigationProps } from '@app/lib/navigation/navigation.types';
import { fp, hp, screenWidth } from '@app/lib/utils';
import React from 'react';
import { ScrollView } from 'react-native';

export interface OngoingScreenProps extends RootNavigationProps<'Ongoing'> {}

const OngoingScreen: React.FC<OngoingScreenProps> = ({ navigation }) => {
  const { spacing } = useTheme();
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
      <Box flex={1} padding="m">
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text variant="title" mb="s">
            Ongoing
          </Text>
          {Array(2)
            .fill(0)
            .map((_, index) => {
              return (
                <Card
                  key={index}
                  mb="s"
                  flexDirection="row"
                  alignItems="center">
                  <Box
                    justifyContent="center"
                    height={32}
                    width={32}
                    borderWidth={1}
                    mr="s"
                    borderRadius="round"
                    alignItems="center">
                    <Text>{index + 1}</Text>
                  </Box>
                  <Box>
                    <Text variant="comment">From: {'         Boro Math'}</Text>
                    <Text variant="comment">
                      {/* eslint-disable-next-line quotes */}
                      Prev Stop:{`  `}Moharaja Mor{' '}
                      <Text variant="caption" fontSize={fp(1.2)}>
                        (Left at: 10:30 am)
                      </Text>
                    </Text>
                    <Text variant="comment">
                      Next Stop:{'  '}
                      <Text fontWeight="600" variant="comment" color="primary">
                        Terminal
                      </Text>
                    </Text>
                  </Box>
                </Card>
              );
            })}
          <Text variant="title" mt="m" mb="s">
            Upcoming
          </Text>
          <Box flexDirection="row" flexWrap="wrap">
            {Array(4)
              .fill(0)
              .map((_, index) => {
                return (
                  <Box key={index} mb="s" flexDirection="row">
                    <Card
                      width={
                        (screenWidth - spacing.m * 2) / 2 - Math.round(hp(1))
                      }
                      alignItems="center">
                      <Box
                        justifyContent="center"
                        height={32}
                        width={32}
                        borderWidth={1}
                        mb="s"
                        borderRadius="round"
                        alignItems="center">
                        <Text>{index + 1}</Text>
                      </Box>
                      <Box alignSelf="stretch">
                        <TextRow title="From" value="Campus" />
                        <Spacer />
                        <TextRow title="Time" value="11:30am" />
                      </Box>
                    </Card>
                    <Visibility on={index % 2 === 0}>
                      <Spacer direction="horinzontal" />
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

export default OngoingScreen;
