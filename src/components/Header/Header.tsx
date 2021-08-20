import React, { FC, useState, useEffect } from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { width, rgbaColors } from '../../utils/utils';

import { Avatar } from '../';

interface Props {
  ref: any;
  rightIcon: any;
  title: string;
  style: any;
  showProfile: any;
}
const Header: FC<Props> = React.forwardRef(({ rightIcon, title, style, showProfile }: Props) => {
  const [faded, setFaded] = useState(0);
  const [borderColor, setBorderColor] = useState('');
  let icon = rightIcon;
  if (!rightIcon) {
    icon = <View style={{ width: 30, height: 30 }} />;
  }

  const _fadeAvatar = (n: number) => {
    setFaded(n);
  };

  useEffect(() => {
    setBorderColor(rgbaColors.light_gray);
  });
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity
        style={[
          styles.touchableMask,
          {
            backgroundColor: `rgba(255,255,255,${faded})`,
          },
        ]}
        onPress={showProfile}
        activeOpacity={1.5}
      />
      <Avatar />
      {title}
      {icon}
    </View>
  );
});
export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    width: width,
    height: 40,
    borderBottomColor: '#ccc',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  touchableMask: {
    position: 'absolute',
    top: 5,
    left: 10,
    width: 30,
    height: 30,
    zIndex: 9,
    padding: 5,
  },
});
