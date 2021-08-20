import React, { FC, useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar } from '../../components';
import DrawerItem from './DrawerItem';

import { FontAwesome, Feather } from '@expo/vector-icons';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

import { rgbaColors, colors, profileWidth, width } from '../../utils/utils';

export const drawerOptionList = [
  {
    icon: <FontAwesome name={'user-o'} color={colors.dark_gray} size={22} />,
    text: 'Profile',
    nav: 'Profile',
  },
  {
    // icon: <Ionicons name={"ios-list-box"} color={colors.dark_gray} size={22} />,
    icon: <Ionicons name={'search'} color={colors.dark_gray} size={22} />,
    text: 'Popular',
    nav: 'Popular',
  },
  {
    icon: <MaterialIcons name={'bookmark-border'} color={colors.dark_gray} size={26} />,
    text: 'Saved',
    nav: 'Saved',
  },
  {
    icon: (
      <Image style={{ height: 22, width: 22 }} source={require('../../assets/thunder.png')} resizeMode={'contain'} />
    ),
    text: 'Discover',
    nav: 'Discover',
  },
  null,
  {
    text: 'Configuration',
    nav: 'Configuration',
  },
  {
    text: 'Help Center',
    nav: 'Help Center',
  },
];

interface Props {
  changeScreen: any;
  profileExtra: any;
  profileName: string;
  profileUserName: string;
}
const Drawer: FC<Props> = ({ changeScreen, profileExtra, profileName, profileUserName }: Props) => {
  const [showBorderTop, setShowBorderTop] = useState(false);
  const [showBoderBottom, setShowBoderBottom] = useState(false);
  const [list, setList] = useState(drawerOptionList);
  const [borderColor, setBorderColor] = useState('');
  const [customExtra, setCustomExtra] = useState(false);

  const showBorders = (event: any) => {
    let y = event.nativeEvent.contentOffset.y;
    if (y < 8 && y > -8) {
      setShowBorderTop(false);
      setShowBoderBottom(false);
    }
    if (showBorderTop || showBoderBottom) return;

    if (y > 10) setShowBorderTop(true);
    if (y < -10) setShowBoderBottom(true);
  };

  useEffect(() => {
    setBorderColor(rgbaColors.light_gray);
    if (typeof profileExtra !== 'string') setCustomExtra(true);
  });

  return (
    <View
      style={{
        flex: 1,
        width: profileWidth,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <View style={[styles.profileContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
        <View style={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
          <Avatar size={50} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '800',
              color: colors.secondary,
            }}
          >
            {profileName}
          </Text>
          <Text
            style={{
              fontSize: 16,
              color: colors.dark_gray,
              marginVertical: 5,
            }}
          >
            {profileUserName}
          </Text>
          <View style={{ marginVertical: 10 }}>
            {customExtra ? profileExtra : <Text style={{ fontSize: 16, color: colors.dark_gray }}>{profileExtra}</Text>}
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
          }}
        >
          <TouchableOpacity>
            <Image
              style={{ height: 30, width: 30 }}
              resizeMode={'contain'}
              source={require('../../assets/topMore.png')}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          width: profileWidth,
          height: StyleSheet.hairlineWidth,
          backgroundColor: borderColor + `${showBorderTop ? '1' : '0'})`,
        }}
      />

      <ScrollView
        style={{
          flex: 1,
        }}
        onScroll={showBorders}
        scrollEventThrottle={16}
      >
        {list.map((item, index) => (
          <DrawerItem key={index.toString()} data={item} changeScreen={changeScreen} />
        ))}
      </ScrollView>

      <View
        style={{
          width: profileWidth,
          height: StyleSheet.hairlineWidth,
          backgroundColor: borderColor + `${showBoderBottom ? '1' : '0'})`,
        }}
      />

      <View style={[styles.profileContainer, { flexDirection: 'row', justifyContent: 'space-between' }]}>
        <TouchableOpacity>
          <Feather name={'moon'} color={colors.primary} size={22} />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name={'qrcode'} color={colors.primary} size={22} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.white,
  },
  profileContainer: {
    width: profileWidth,
    paddingRight: 15,
    paddingLeft: 25,
    paddingVertical: 10,
  },
  borderBottom: {
    borderBottomColor: colors.dark_gray,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
