import { Card } from '@app/components/card';
import { Text } from '@app/components/text';
import React from 'react';

export interface NoCardProps {
  title: string;
}

const NoCard: React.FC<NoCardProps> = ({ title }) => {
  return (
    <Card py="l" justifyContent="center" alignItems="center">
      <Text variant="title">{title}</Text>
    </Card>
  );
};

export default NoCard;
