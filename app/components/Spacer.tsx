import { hp } from '@app/lib/utils';
import React from 'react';
import { View } from 'react-native';

export interface SpacerProps {
  space?: 'tiny' | 'small' | 'medium' | 'large' | number;
  direction?: 'vertical' | 'horinzontal';
}

const Spacer: React.FC<SpacerProps> = ({
  space = 'tiny',
  direction = 'vertical',
}) => {
  let responsiveSpace;
  switch (space) {
    case 'small':
      responsiveSpace = Math.round(hp(1.5));
      break;

    case 'medium':
      responsiveSpace = Math.round(hp(2));
      break;

    case 'large':
      responsiveSpace = Math.round(hp(2.5));
      break;

    default:
      responsiveSpace = Math.round(hp(1));
  }

  if (typeof space === 'number') {
    responsiveSpace = hp(space);
  }

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        height: direction === 'vertical' ? responsiveSpace : 0,
        width: direction === 'horinzontal' ? responsiveSpace : 0,
      }}
    />
  );
};

export default Spacer;
