import { wrapper } from "../../templates/template"

const DetailsScreen = ({route}) => {
    const {title} = route.params.routeProps
  
    return (
      <View style={styles.screenView}>
        <View style={[wrapper.heroPos, {marginLeft: 20,}]}>
          <HeroFont text={title} tc={fontColor.w}/>
        </View>
        <View style={[wrapper.bw, styles.wrapper]}>
          <View style={styles.container}>
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
