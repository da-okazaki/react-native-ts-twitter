import React, { FC } from 'react';
import { View, Image } from 'react-native';
import { colors } from '../../utils/utils';

interface Props {
  photo?: any;
  size?: number;
  style?: any;
}
const Avatar: FC<Props> = ({ photo, size, style }: Props) => {
  if (photo) {
    let defaultSize = 30;
    if (size) defaultSize = size;

    return (
      <Image
        style={[
          {
            height: size,
            width: size,
            borderRadius: defaultSize / 2,
          },
          // style
        ]}
        resizeMode={'contain'}
        source={photo}
      />
    );
  }

  let avatarSize = 30;
  if (size) avatarSize = size;

  let headSize = avatarSize;
  return (
    <View
      style={[
        {
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize * 2,
          backgroundColor: colors.exlight_gray,
          alignItems: 'center',
        },
        // props.style
      ]}
    >
      <View
        style={{
          width: avatarSize / 3,
          height: avatarSize / 3,
          borderRadius: headSize * 2,
          marginTop: avatarSize / 10,
          backgroundColor: colors.dark_gray,
        }}
      />
      <View
        style={{
          width: avatarSize / 1.7,
          height: avatarSize / 2.5,
          borderRadius: 16.5,
          marginTop: avatarSize / 15,
          backgroundColor: colors.dark_gray,
        }}
      />
    </View>
  );
};

export default Avatar;
