import React from 'react';
import { View,Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useTailwind} from 'tailwind-rn';


const BottomView = (props) => {

    const tailwind = useTailwind();
    return (
        <View style={tailwind("p-2 flex flex-row items-center")}>
        <View style={tailwind("")}>
            <Ionicons 
            name={props.image}
            size={150}
            color="#ffffff"/>
        </View>
        <View style={tailwind("grow flex-row justify-end")}>
            <View style={tailwind("pr-1")}>
                <Text style={tailwind("text-white text-3xl font-bold")}>City: Brisbane</Text>
                <Text style={tailwind("text-white text-2xl font-bold")}>Current: {props.curTemp}c</Text>
                <Text style={tailwind("text-white text-xl font-bold")}>High: {props.highTemp}c</Text>
                <Text style={tailwind("text-white text-xl font-bold")}>Low: {props.lowTemp}c</Text>
                <Text style={tailwind("text-white text-xl font-bold")}>Humidity: {props.curHumidity}%</Text>
            </View>
        </View>
    </View>
    );
}

export default BottomView;