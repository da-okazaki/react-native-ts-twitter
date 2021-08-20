import React, { FC, useEffect } from 'react';

import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { width, colors } from '../../utils/utils';

import { MaterialCommunityIcons } from '@expo/vector-icons';

interface TabProps {
  icon: any;
  onPress: () => void;
}
const TabOption = function ({ icon, onPress }: TabProps) {
  return (
    <TouchableOpacity
      style={{
        padding: 5,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}
    >
      {icon}
    </TouchableOpacity>
  );
};

interface Props {
  navigation: any;
  selected: any;
}
const FancyBottomTab: FC<Props> = ({ navigation, selected }: Props) => {
  const iconList = [
    <MaterialCommunityIcons name={'home-outline'} color={colors.secondary} size={26} />,
    <MaterialCommunityIcons name={'magnify'} color={colors.secondary} size={26} />,
    <MaterialCommunityIcons name={'bell-outline'} color={colors.secondary} size={26} />,
    <MaterialCommunityIcons name={'email-outline'} color={colors.secondary} size={26} />,
  ];

  const iconActiveList = [
    <MaterialCommunityIcons name={'home'} color={colors.primary} size={27} />,
    <MaterialCommunityIcons name={'magnify'} color={colors.primary} size={27} />,
    <MaterialCommunityIcons name={'bell'} color={colors.primary} size={27} />,
    <MaterialCommunityIcons name={'email'} color={colors.primary} size={27} />,
  ];

  useEffect(() => {
    iconList[selected] = iconActiveList[selected];
  });

  return (
    <View
      style={{
        width: width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopColor: '#ccc',
        borderTopWidth: StyleSheet.hairlineWidth,
      }}
    >
      <TabOption icon={iconList[0]} onPress={navigation.bind(this, 'Home')} />
      <TabOption icon={iconList[1]} onPress={navigation.bind(this, 'Search')} />
      <TabOption icon={iconList[2]} onPress={navigation.bind(this, 'Notification')} />
      <TabOption icon={iconList[3]} onPress={navigation.bind(this, 'Message')} />
    </View>
  );
};
export default FancyBottomTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: '#fff',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});
