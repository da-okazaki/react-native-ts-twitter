import React, { useState } from 'react';
import { Image, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { notificationFeed } from '../../constants/MockData';
import { width, colors } from '../../utils/utils';

import NavigationWraper from '../../components/NavigationWraper/NavigationWraper';
import Tweet from '../../components/Tweet/Tweet';
import NotificationCard from './NotificationCard';

interface Props {
  navigation: any;
}
const Notification = ({ navigation }: Props) => {
  const [sec, setSec] = useState(0);
  const [pos, setPos] = useState(0);

  const mappingNumber = (x: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
    return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  const animateHeader = (event: any) => {
    let x = event.nativeEvent.contentOffset.x / 2;
    setPos(x);
    setSec(x >= width / 4 ? 1 : 0);
  };

  return (
    <NavigationWraper
      navigation={navigation}
      selected={2}
      headerStyle={{ borderBottomWidth: 0 }}
      rightIcon={
        <TouchableOpacity style={{ padding: 5 }}>
          <Image
            style={{ height: 28, width: 28 }}
            source={require('../../assets/topGear.png')}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
      }
      title={
        <Text
          style={{
            fontWeight: '700',
            fontSize: 18,
            fontFamily: 'HelveticaNeue-Bold',
          }}
        >
          {'Notifications'}
        </Text>
      }
    >
      <View
        style={{
          marginTop: 5,
          borderBottomColor: '#ccc',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              paddingVertical: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            // onPress={() => scroll.scrollTo({ x: 0, y: 0, animated: true })}
          >
            <Text
              style={[
                {
                  fontSize: 15,
                  fontWeight: '500',
                  color: colors.dark_gray,
                },
                sec === 0 && { color: colors.primary },
              ]}
            >
              {'All'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              paddingVertical: 15,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            // onPress={() => scroll.scrollTo({ x: width, y: 0, animated: true })}
          >
            <Text
              style={[
                {
                  fontSize: 15,
                  fontWeight: '500',
                  color: colors.dark_gray,
                },
                sec === 1 && { color: colors.primary },
              ]}
            >
              {'Mentions'}
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: width / 2,
            backgroundColor: colors.primary,
            borderRadius: 5,
            height: 2,
            marginLeft: pos,
          }}
        />
      </View>

      <ScrollView
        // ref={(ref) => {
        //   scroll = ref;
        // }}
        style={styles.container}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={animateHeader}
        scrollEventThrottle={16}
      >
        <ScrollView style={styles.container}>
          {notificationFeed.all.map((item, n) => {
            return (
              <TouchableOpacity
                key={n.toString()}
                style={{
                  borderColor: colors.exlight_gray,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                }}
                onPress={() =>
                  navigation.navigate('DynamicTitle', {
                    last: 'Notification',
                  })
                }
              >
                <NotificationCard data={item} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <ScrollView
          style={[
            styles.container,
            {
              borderLeftColor: '#ccc',
              borderLeftWidth: StyleSheet.hairlineWidth,
            },
          ]}
        >
          {notificationFeed.mentions.map((item, n) => {
            return (
              <TouchableOpacity
                key={n.toString()}
                style={{
                  borderColor: colors.exlight_gray,
                  borderBottomWidth: StyleSheet.hairlineWidth,
                }}
                onPress={() =>
                  navigation.navigate('Tweet', {
                    last: 'Notification',
                  })
                }
              >
                <Tweet data={item} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </ScrollView>
    </NavigationWraper>
  );
};

export default Notification;

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
