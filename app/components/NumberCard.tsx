import { Box, TouchBox } from '@app/components/box';
import { Card } from '@app/components/card';
import { Text } from '@app/components/text';
import { IconFamily } from '@app/lib/enums';
import Icon from '@app/lib/icons';
import React from 'react';
import { Linking } from 'react-native';

export interface NumberCardProps {
  name: string;
  phone: string;
}

const NumberCard: React.FC<NumberCardProps> = ({ name, phone }) => {
  return (
    <TouchBox
      onPress={() => {
        try {
          Linking.openURL(`tel:${phone}`);
        } catch (error) {}
      }}>
      <Card
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Text variant="comment">{name}</Text>
        <Box flexDirection="row" alignItems="center">
          <Icon family={IconFamily.Feather} name="phone" />
          <Text ml="s" variant="comment">
            {phone}
          </Text>
        </Box>
      </Card>
    </TouchBox>
  );
};

export default NumberCard;
