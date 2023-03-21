import { View, StyleSheet, Animated, TouchableOpacity} from 'react-native'
import * as React from 'react';
import { HeroFont, LFb, LightFont, SemiLightFont } from '../../../components/Font-components'
import { OptionsCard } from '../../../components/Card-components';
import { TabView, SceneMap } from 'react-native-tab-view';
import { fontColor, iconColor, wrapper } from '../../../templates/template';

import FirstRoute from './tabView/First';
import SecondRoute from './tabView/Second';
import ThirdRoute from './tabView/Third';

class TabViewExample extends React.Component {
  // tab bar sections and titles
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'General' },
      { key: 'second', title: 'Treatment' },
      { key: 'third', title: 'Visits' },
    ],
  };

  _handleIndexChange = (index) => this.setState({ index });

  _renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.4
            ),
          }) ;

          return (
            <TouchableOpacity
              key={i}
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.View style={{ opacity }}>
              <LightFont text={route.title}/>
              </Animated.View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const MedicalFile = () => {
  return (
    <View style={styles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
        <HeroFont text={'Corana Virus'} tc={fontColor.w}/>
      </View>
          <View style={styles.dateContainer}>
          <OptionsCard iconName={"calendar-month"} option={"20.03.2023"} s={34} o={'b'} tc={fontColor.w} mic={fontColor.w}/>
          </View>
        <View style={[styles.tabWrapper, wrapper.bw]}>
          <View style={styles.tabViewContainer}>
            <TabViewExample />
          </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    paddingTop: 40,
    display: 'flex',
    backgroundColor: iconColor.gbgd,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 10,
    paddingLeft: 10
  },
  tabViewContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBar: {
    flexDirection: 'row',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'gray',
    height: 40,
    alignItems: 'center'
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
  tabWrapper: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
  }
})

export default MedicalFile
