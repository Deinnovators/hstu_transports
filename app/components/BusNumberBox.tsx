import { Box } from '@app/components/box';
import { Text } from '@app/components/text';
import React from 'react';

export interface BusNumberBoxProps {
  busNumber: number;
}

const BusNumberBox: React.FC<BusNumberBoxProps> = ({ busNumber }) => {
  return (
    <Box
      justifyContent="center"
      height={32}
      width={32}
      borderWidth={1}
      mr="s"
      borderRadius="round"
      alignItems="center">
      <Text>{busNumber}</Text>
    </Box>
  );
};

export default BusNumberBox;
