import React from 'react';
import BusNumberBox from '@app/components/BusNumberBox';
import Spacer from '@app/components/Spacer';
import TextRow from '@app/components/TextRow';
import { Box } from '@app/components/box';
import { Card } from '@app/components/card';
import { useTheme } from '@app/lib/hooks';
import { hp, screenWidth } from '@app/lib/utils';
import dayjs from 'dayjs';
import {
  getAndSeperatedName,
  getSpaceSeperatedName,
} from '@app/lib/utils/string.utils';

export interface UpcomingCardProps {
  schedule: any;
}

const UpcomingCard: React.FC<UpcomingCardProps> = ({ schedule }) => {
  const { spacing } = useTheme();
  return (
    <Card
      width={(screenWidth - spacing.m * 2) / 2 - Math.round(hp(1))}
      alignItems="center">
      <BusNumberBox busNumber={schedule.transport.busNumber} />
      <Spacer space="medium" />
      <Box alignSelf="stretch">
        <TextRow
          title="From"
          value={getSpaceSeperatedName(schedule.stoppages[0])}
        />
        <Spacer />
        <TextRow
          title="To"
          value={getSpaceSeperatedName(
            schedule.stoppages[schedule.stoppages.length - 1],
          )}
        />
        <Spacer />
        <TextRow title="Time" value={dayjs(schedule.time).format('HH:mma')} />
        <Spacer />
        <TextRow title="For" value={getAndSeperatedName(schedule.tripName)} />
      </Box>
    </Card>
  );
};

export default UpcomingCard;
