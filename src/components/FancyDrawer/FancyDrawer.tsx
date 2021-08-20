import React, { FC, useState, useEffect, ReactNode } from 'react';

import { ScrollView, View, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

import Drawer from './Drawer';
import { rgbaColors, colors, width, height, profileWidth } from '../../utils/utils';

function mappingNumber(x: number, in_min: number, in_max: number, out_min: number, out_max: number) {
  return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

interface Props {
  ref?: any;
  scroll?: any;
  fading: any;
  navigation: any;
  profileName: string;
  profileUserName: string;
  profileExtra: any;
  children: ReactNode;
}
const FancyDrawer: FC<Props> = React.forwardRef(
  ({
    // ref,
    scroll,
    fading,
    navigation,
    profileName,
    profileUserName,
    profileExtra,
    children,
  }: Props) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const [fadedColor, setFadedColor] = useState('');

    const _showProfile = (z: number) => scroll.scrollTo({ x: z, y: 0, animated: true });

    const _handleScroll = (event: any) => {
      let x = event.nativeEvent.contentOffset.x;
      if (x >= profileWidth && !isScrolled) return;
      else if (x >= profileWidth && isScrolled) {
        setIsScrolled(false);
        fading = 0;
      } else {
        let y = mappingNumber(x, 300, 0, 0, 0.7);
        setIsScrolled(true);
        setOpacity(y);

        y = mappingNumber(x, 300, 0, 0, 1);
        fading = y;
      }
    };

    useEffect(() => {
      setFadedColor(rgbaColors.exlight_gray);
    });

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={styles.container}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={_handleScroll}
          contentOffset={{ x: profileWidth, y: 0 }}
          ref={(ref) => (scroll = ref)}
        >
          <Drawer
            changeScreen={navigation}
            profileName={profileName}
            profileUserName={profileUserName}
            profileExtra={profileExtra}
          />

          <View
            style={[
              styles.container,
              {
                borderLeftColor: colors.exlight_gray,
                borderLeftWidth: StyleSheet.hairlineWidth,
              },
            ]}
          >
            {isScrolled && (
              <TouchableOpacity
                onPress={_showProfile.bind(this, profileWidth)}
                style={[
                  {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: width,
                    height: height,
                    backgroundColor: fadedColor + `${opacity})`,
                    zIndex: 10,
                  },
                ]}
                activeOpacity={1.5}
              />
            )}
            {children}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
);
export default FancyDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.white,
  },
});
