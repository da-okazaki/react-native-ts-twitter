import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

// Screens
import { Home, Search, Notification, Message } from '../screens';

// Types
import { BottomTabParamList, HomeParamList, MessageParamList, SearchParamList, NotificationParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator initialRouteName='Home' tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name='Home'
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='ios-code' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Search'
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='ios-code' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Notification'
        component={NotificationNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='ios-code' color={color} />,
        }}
      />
      <BottomTab.Screen
        name='Message'
        component={MessageNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name='ios-code' color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Stack
const HomeStack = createStackNavigator<HomeParamList>();
const SearchStack = createStackNavigator<SearchParamList>();
const NotificationStack = createStackNavigator<NotificationParamList>();
const MessageStack = createStackNavigator<MessageParamList>();

// Navigator
function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='HomeScreen' component={Home} options={{ headerTitle: 'Home' }} />
    </HomeStack.Navigator>
  );
}

function SearchNavigator() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name='SearchScreen' component={Search} options={{ headerTitle: 'Search' }} />
    </SearchStack.Navigator>
  );
}

function NotificationNavigator() {
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen
        name='NotificationScreen'
        component={Notification}
        options={{ headerTitle: 'Nortification' }}
      />
    </NotificationStack.Navigator>
  );
}

function MessageNavigator() {
  return (
    <MessageStack.Navigator>
      <MessageStack.Screen name='MessageScreen' component={Message} options={{ headerTitle: 'Message' }} />
    </MessageStack.Navigator>
  );
}
