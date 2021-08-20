import React, { FC, ReactNode } from 'react';

import { View, Text } from 'react-native';

import FancyDrawer from '../FancyDrawer/FancyDrawer';
import Header from '../Header/Header';
import FancyBottomTab from '../FancyBottomTab/FancyBottomTab';
import TweetBubble from '../TweetPost/TweetPost';

interface Props {
  navigation: any;
  title: any;
  rightIcon: any;
  headerStyle?: any;
  selected: any;
  children: ReactNode;
}
const NavigationWraper: FC<Props> = React.forwardRef(
  ({ navigation, title, rightIcon, headerStyle, selected, children }: Props) => {
    let header = null;
    let drawer = null;

    const _handleShowDrawer = () => {};

    const _handleHeaderFade = () => {};

    const _changeScreen = (screen: any) =>
      navigation.navigate(screen, {
        last: navigation.state.routeName,
      });

    return (
      <FancyDrawer
        fading={_handleHeaderFade}
        ref={(ref: any) => (drawer = ref)}
        navigation={_changeScreen}
        profileName={'dev-andremonteiro'}
        profileUserName={'@DAndremonteiro'}
        profileExtra={
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>{'10 '}</Text>
            <Text
              style={{
                fontSize: 16,
                color: '#657786',
                fontWeight: '500',
                marginRight: 20,
              }}
            >
              {'Following'}
            </Text>
            <Text style={{ fontSize: 16, fontWeight: '500' }}>{'20 '}</Text>
            <Text style={{ fontSize: 16, color: '#657786' }}>{'Followers'}</Text>
          </View>
        }
      >
        <Header
          ref={(ref: any) => (header = ref)}
          showProfile={_handleShowDrawer}
          title={title}
          rightIcon={rightIcon}
          style={headerStyle}
        />
        {/**
      {children}
      <TweetBubble
        message={selected !== 3}
        onBubblePress={selected !== 3 ? _changeScreen.bind(this, 'New Tweet') : _changeScreen.bind(this, 'New Message')}
      />
      <FancyBottomTab selected={selected} navigation={_changeScreen} />
       */}
      </FancyDrawer>
    );
  }
);
export default NavigationWraper;
