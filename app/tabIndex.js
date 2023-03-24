import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './screens/tab/Main';
import ProfileScreen from './screens/tab/Profile';
import SponsorsScreen from './screens/tab/Sponsors';
import SettingsScreen from './screens/tab/Settings';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import NavIndex from './screens/tab/navIndex';
import { iconColor } from './templates/template';

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{paddingHorizontal: 12, width: '100%'}}>
    <View style={tabStyles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{paddingHorizontal: 4}}
          >
            <Text style={{ color: isFocused ? iconColor.gbgd : '#44403c', fontSize: 16, fontWeight: '600', }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const TabIndex = () => {
    return (
        <Tab.Navigator
        initialRouteName='Main'
        screenOptions={
            {headerShown: false}
        }
        tabBar={props => <MyTabBar {...props}/>}>
            <Tab.Screen name="Main" component={NavIndex} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Sponsors" component={SponsorsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    )
}

const tabStyles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
})

export default TabIndex