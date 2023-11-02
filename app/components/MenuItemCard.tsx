import { Box, TouchBox } from '@app/components/box';
import { Card } from '@app/components/card';
import { Text } from '@app/components/text';
import { IconFamily } from '@app/lib/enums';
import Icon from '@app/lib/icons';
import React from 'react';

export interface MenuItemCardProps {
  title: string;
  onPress?: () => void;
  icon?: any;
}

const iconSize = 24;

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  title,
  onPress,
  icon = 'truck',
}) => {
  return (
    <TouchBox onPress={onPress}>
      <Card
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Box flexDirection="row" alignItems="center">
          <Icon
            family={IconFamily.Feather}
            name={icon}
            color="black"
            size={iconSize}
          />
          <Text ml="s">{title}</Text>
        </Box>
        <Icon
          family={IconFamily.Feather}
          name="chevron-right"
          size={iconSize}
          color="black"
        />
      </Card>
    </TouchBox>
  );
};

export default MenuItemCard;
