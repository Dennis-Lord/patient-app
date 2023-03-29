import { wrapper } from "../../templates/template"

const DetailsScreen = ({route}) => {
    const {option} = route.params.routeProps
  
    return (
      <View style={styles.screenView}>
        <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
          <HeroFont text={option} tc={fontColor.w}/>
        </View>
        <View style={[wrapper.bw, styles.wrapper]}>
          <View style={styles.container}>
            {
              option === 'Privacy policy' ?
              <></>
              : option === 'About us'?
              <></>
              : option === 'Help' ?
              <></>
              : 
              <></>
            }
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
        wrapper: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 8,
    },
    container: {
        marginTop: 20,
        flex: 1,
      },
})

export default DetailsScreen
