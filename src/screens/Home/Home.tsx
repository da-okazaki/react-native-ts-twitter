import React from 'react';
import { View, ScrollView, TouchableHighlight, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

import { width, colors } from '../../utils/utils';
import { homeFeed } from '../../constants/MockData';

import NavigationWraper from '../../components/NavigationWraper/NavigationWraper';
import Tweet from '../../components/Tweet/Tweet';

interface Props {
  navigation: any;
}
const Home = ({ navigation }: Props) => {
  return (
    <NavigationWraper
      navigation={navigation}
      selected={0}
      rightIcon={
        <TouchableOpacity style={{ padding: 5 }}>
          <Image
            style={{ height: 30, width: 30 }}
            source={require('../../assets/topStar.png')}
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
          {'Home'}
        </Text>
      }
    >
      <ScrollView style={styles.container}>
        {homeFeed.map((i, n) => (
          <TouchableOpacity
            key={n.toString()}
            style={{
              borderColor: colors.exlight_gray,
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
            onPress={() => navigation.navigate('Tweet', { last: 'Home' })}
          >
            <Tweet data={i} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </NavigationWraper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.exexlight_gray,
  },
});
