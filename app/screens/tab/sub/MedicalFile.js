import { View, StyleSheet, Animated, TouchableOpacity} from 'react-native'
import * as React from 'react';
import { HeroFont, LightFont } from '../../../components/Font-components'
import { OptionsCard } from '../../../components/Card-components';
import { TabView, SceneMap } from 'react-native-tab-view';
import { fontColor, iconColor, wrapper } from '../../../templates/template';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FourHourChart } from '../../../components/Card-components';

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
    ]
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

   renderScene = ({ route }) => {
    switch (route.key) {
      case 'first':
        return <FirstRoute fileData={this.props.data}/>;
      case 'second':
        return <SecondRoute fileData={this.props.data}/>;
      case 'third':
        return <ThirdRoute fileData={this.props.data}/>;
      default:
        return null;
    }
  };

  render() {
    const {data} = this.props
    return (
      <TabView
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const MedicalFile = ({route}) => {
  const fileDoc = route.params.dataFile;
  const [toggle, setToggle] = React.useState(false)

  const Toggle = () => {
    if(toggle === false) {
      setToggle(true)
    }else {
      setToggle(false)
    }
  }

  return (
    <View style={styles.screenView}>
      <View style={[wrapper.heroPos, {marginLeft: 20}]}>
        <HeroFont text={fileDoc.disease} tc={fontColor.w}/>
      </View>
          <View style={styles.dateContainer}>
          <OptionsCard iconName={"calendar-month"} option={fileDoc.diseaseDate} s={34} o={'b'} tc={fontColor.w} mic={fontColor.w}/>
          <TouchableOpacity onPress={() => Toggle()}>
            <View style={styles.di_container}>
                <MaterialCommunityIcons name={'chart-timeline-variant'} size={28} color={fontColor.n} />
            </View>
          </TouchableOpacity>
          </View>
        <View style={[styles.tabWrapper, wrapper.bw]}>
          {
            toggle ?
            <FourHourChart chart={fileDoc}/>
            :
            <></>
          }
          <View style={styles.tabViewContainer}>
            <TabViewExample data={fileDoc}/>
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
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    paddingLeft: 20,
    justifyContent: 'space-between',
    paddingRight: 28
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
  },
  di_container: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: fontColor.w,
    justifyContent: 'center',
    alignItems: 'center',
},
})

export default MedicalFile
