import React, { FC } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { width, height, colors } from '../../utils/utils';

interface Props {
  message: any;
  onBubblePress: () => void;
}
const TweetPost: FC<Props> = ({ onBubblePress, message }: Props) => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        top: height - 148,
        left: width - 80,
      }}
      onPress={onBubblePress}
    >
      <View
        style={{
          height: 60,
          width: 60,
          borderRadius: 30,
          backgroundColor: colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {message ? (
          <Image style={{ height: 30, width: 30 }} source={require('../../assets/tweet.png')} />
        ) : (
          <Image style={{ height: 30, width: 30 }} source={require('../../assets/message.png')} />
        )}
      </View>
    </TouchableOpacity>
  );
};
export default TweetPost;
