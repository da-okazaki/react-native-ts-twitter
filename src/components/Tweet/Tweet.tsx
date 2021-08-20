import React, { FC } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { Avatar } from '../';
import HyperLinkText from '../HyperLinkText';

import { colors, width } from '../../utils/utils';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
  data: any;
}
const Tweet: FC<Props> = ({ data }: Props) => {
  let { type, user, userName, avatar, time, message, comments, retweets, likes, from, original } = data;

  const renderTopText = (type: any, text: string) => {
    text += type === 'retweet' ? ' retweet' : ' response';
    return (
      <View
        style={{
          paddingLeft: 35,
          paddingBottom: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        {type === 'retweet' ? (
          <MaterialCommunityIcons name={'twitter-retweet'} size={18} color={colors.dark_gray} />
        ) : (
          <MaterialCommunityIcons name={'message-reply'} size={14} color={colors.dark_gray} />
        )}
        <Text style={{ marginLeft: 10, color: colors.dark_gray }}>{text}</Text>
      </View>
    );
  };

  const renderBottomIcons = (name: string, text: number) => {
    let finalText = text === 0 ? null : text.toString();

    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <MaterialCommunityIcons
          // name={"tset"}
          size={18}
          color={colors.dark_gray}
        />
        <Text style={{ marginLeft: 5, color: colors.dark_gray }}>{finalText}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={[
        { backgroundColor: '#FFF' },
        type
          ? {
              paddingVertical: 10,
              paddingHorizontal: 15,
            }
          : { paddingBottom: 15 },
      ]}
    >
      {type === 'retweet' && renderTopText(type, from)}
      {type === 'responseTo' && renderTopText(type, user)}
      {type === 'responseTo' && <Tweet data={original} />}
      <View style={{ flexDirection: 'row' }}>
        <Avatar size={50} photo={avatar} />
        <View style={{ marginLeft: 10, flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: '500' }}>{user}</Text>
              <Text style={{ paddingLeft: 5, color: colors.dark_gray }}>{userName}</Text>
              <View
                style={{
                  backgroundColor: colors.dark_gray,
                  marginHorizontal: 4,
                  width: 1.5,
                  height: 1.5,
                  borderRadius: 3,
                }}
              />
              <Text style={{ color: colors.dark_gray }}>{time}</Text>
            </View>
            <SimpleLineIcons name={'arrow-down'} size={10} color={colors.dark_gray} />
          </View>
          <View style={{ flex: 1 }}>
            <HyperLinkText text={message} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '80%',
              marginTop: 15,
            }}
          >
            {renderBottomIcons('comment-outline', comments)}
            {renderBottomIcons('twitter-retweet', retweets)}
            {renderBottomIcons('heart-outline', likes)}
            {renderBottomIcons('share-outline', 0)}
          </View>
        </View>
      </View>
    </View>
  );
};
export default Tweet;
