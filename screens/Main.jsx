import React from 'react';
import { Text, View ,StyleSheet} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import Search from '../components/Search'
import Ionicons from 'react-native-vector-icons/Ionicons'
import DaysView from '../components/DaysView';
import TopView from '../components/TopView';
import BottomView from '../components/BottomView';


const Main = (props) => {
	const tailwind = useTailwind();
    // weather image to be displayed when api is hit
    const image = "md-partly-sunny-sharp"
    const curTemp = "20"
    const curHumidity = "60"
    const lowTemp = "16"
    const highTemp = "22" 
	return (
        <View style={[styles.container1, {
            flexDirection: "column"
          }]}>
            <View style={styles.container1} >
                <Search/>
            </View>
            <View style={styles.container2}>
                <TopView 
                image={image} 
                curTemp={curTemp} 
                curHumidity={curHumidity} 
                lowTemp={lowTemp}
                highTemp={highTemp}/>
                <DaysView image={image} curTemp={curTemp}/>
            </View>
            <View style={styles.container3}>
                <BottomView />
             </View>
          </View>
	);
}

// sunny = "#F97316"
// cloudy/sunny = "#38BDF8"
// rainy = "#A1A1AA"
// storm = "#52525B"
const test = "#38BDF8"

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      backgroundColor: test
    },
    container2: {
        flex: 2,
        backgroundColor:test
      },
    container3: {
        flex: 3,
        backgroundColor:test
      },
  });
//   bg-orange-500

export default Main;