import { View, StyleSheet, Animated, TouchableOpacity, StatusBar} from 'react-native'
import * as React from 'react';
import { HeroFont, SemiFont } from '../../../components/Font-components'
import { OptionsCard } from '../../../components/Card-components';
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.container]} />
);
const SecondRoute = () => (
  <View style={[styles.container]} />
);
const ThirdRoute = () => (
  <View style={[styles.container]} />
);

class TabViewExample extends React.Component {
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
              inputIndex === i ? 1 : 0.5
            ),
          });

          return (
            <TouchableOpacity
              key={i}
              style={styles.tabItem}
              onPress={() => this.setState({ index: i })}>
              <Animated.View style={{ opacity }}>
              <SemiFont text={route.title}/>
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

const MedicalFile = ({navigation}) => {
  return (
    <View style={styles.screenView}>
        <HeroFont text={'Coronavirus'}/>
        <View style={styles.dateContainer}>
        <OptionsCard iconName={"calendar-month"} option={"20.03.2023"} s={34} o={''}/>
        </View>
        <View style={styles.tabViewContainer}>
          <TabViewExample />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    marginTop: 40,
    display: 'flex',
    paddingHorizontal: 20,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 24,
  },
  tabViewContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black'
  },
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
  },
})

export default MedicalFile
