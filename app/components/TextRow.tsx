import { Box } from '@app/components/box';
import Text from '@app/components/text/Text';
import React from 'react';

export interface TextRowProps {
  title: string;
  value: string;
}
const TextRow: React.FC<TextRowProps> = ({ title, value }) => {
  return (
    <Box alignSelf="stretch" flexDirection="row">
      <Box width="50%">
        <Text fontWeight="600" variant="comment">
          {title}
        </Text>
      </Box>
      <Text variant="comment">{value}</Text>
    </Box>
  );
};

export default TextRow;
