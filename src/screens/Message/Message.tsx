import React from 'react';
import { Image, View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { width, colors } from '../../utils/utils';

import { messageFeed } from '../../constants/MockData';

import NavigationWraper from '../../components/NavigationWraper/NavigationWraper';
import MessageCard from './MessageCard';

interface Props {
  navigation: any;
}
const Message = ({ navigation }: Props) => {
  return (
    <ScrollView style={styles.container}>
      {messageFeed.map((i, n) => (
        <TouchableOpacity
          key={n.toString()}
          style={{
            borderColor: colors.exlight_gray,
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
          onPress={() =>
            navigation.navigate('DynamicTitle', {
              last: 'Message',
            })
          }
        >
          <MessageCard data={i} />
        </TouchableOpacity>
      ))}
    </ScrollView>
    /**
    <NavigationWraper
      navigation={navigation}
      selected={3}
      rightIcon={null}
      title={
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            fontFamily: 'HelveticaNeue-Bold',
          }}
        >
          {'Messages'}
        </Text>
      }
    >
      <ScrollView style={styles.container}>
        {messageFeed.map((i, n) => (
          <TouchableOpacity
            key={n.toString()}
            style={{
              borderColor: colors.exlight_gray,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
            onPress={() =>
              navigation.navigate('DynamicTitle', {
                last: 'Message',
              })
            }
          >
            <MessageCard data={i} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </NavigationWraper>
     */
  );
};
export default Message;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.exexlight_gray,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});
