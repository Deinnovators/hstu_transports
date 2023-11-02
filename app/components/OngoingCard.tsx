import React from 'react';
import BusNumberBox from '@app/components/BusNumberBox';
import { Box } from '@app/components/box';
import { Card } from '@app/components/card';
import { Text } from '@app/components/text';
import { fp } from '@app/lib/utils';
import {
  getAndSeperatedName,
  getSpaceSeperatedName,
} from '@app/lib/utils/string.utils';
import dayjs from 'dayjs';

export interface OngoingCardProps {
  trip: any;
}

const OngoingCard: React.FC<OngoingCardProps> = ({ trip }) => {
  const nextStopIndex = trip.schedule.stoppages.findIndex(
    (s: any) => s === trip.nextStop,
  );
  return (
    <Card mb="s" flexDirection="row" alignItems="center">
      <BusNumberBox busNumber={trip.schedule.transport.busNumber} />
      <Box ml="s">
        <Text variant="comment">
          For:{'             '}
          <Text fontWeight="600" variant="comment" color="oceanBlue">
            {getAndSeperatedName(trip.schedule.tripName)}
          </Text>
        </Text>
        <Text variant="comment">
          From:{' '}
          {`         ${getSpaceSeperatedName(trip.schedule.stoppages[0])}`}
        </Text>
        <Text variant="comment">
          {/* eslint-disable-next-line quotes */}
          Prev Stop:{`  `}
          {getSpaceSeperatedName(
            trip.schedule.stoppages[nextStopIndex - 1],
          )}{' '}
          <Text variant="caption" fontSize={fp(1.2)}>
            (Left at: {dayjs(trip.prevLeftAt).format('HH:mma')})
          </Text>
        </Text>
        <Text variant="comment">
          Next Stop:{'  '}
          <Text fontWeight="600" variant="comment" color="primary">
            {getSpaceSeperatedName(trip.schedule.stoppages[nextStopIndex])}
          </Text>
        </Text>
      </Box>
    </Card>
  );
};

export default OngoingCard;
