import { Box } from '@app/components/box';
import { Text } from '@app/components/text';
import React from 'react';

export interface BusNumberBoxProps {
  busNumber: number;
  size?: number;
  sizeRatio?: number;
}

const BusNumberBox: React.FC<BusNumberBoxProps> = ({
  busNumber,
  size = 48,
  sizeRatio = 0.35,
}) => {
  return (
    <Box
      justifyContent="center"
      height={size}
      width={size}
      borderWidth={1}
      mr="s"
      borderRadius="round"
      alignItems="center">
      <Text fontSize={size * sizeRatio}>{busNumber}</Text>
    </Box>
  );
};

export default BusNumberBox;
