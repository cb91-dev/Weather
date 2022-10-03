import React from 'react';
import { FlatList,SafeAreaView, TextInput, View,Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {useTailwind} from 'tailwind-rn';


const DaysView = (props) => {

    const hourly = [
       {
            "id":1,
            "forcast_temp": "15",
            "displayImage":"md-partly-sunny-sharp",
            "time":"12:00"
        },
      {
            "id":2,
            "forcast_temp": "20",
            "displayImage":"md-partly-sunny-sharp",
            "time":"13:00"
        },
        {
            "id":3,
            "forcast_temp": "21",
            "displayImage":"md-partly-sunny-sharp",
            "time":"14:00"
        },
        {
            "id":4,
            "forcast_temp": "22",
            "displayImage":"md-partly-sunny-sharp",
            "time":"15:00"
        }, 
       {
            "id":5,
            "forcast_temp": "19",
            "displayImage":"md-partly-sunny-sharp",
            "time":"16:00"
        }, 
        {
            "id":6,
            "forcast_temp": "18",
            "displayImage":"md-partly-sunny-sharp",
            "time":"17:00"
        },
        {
            "id":7,
            "forcast_temp": "18",
            "displayImage":"md-partly-sunny-sharp",
            "time":"17:00"
        },
        {
            "id":8,
            "forcast_temp": "18",
            "displayImage":"md-partly-sunny-sharp",
            "time":"17:00"
        },
        {
            "id":9,
            "forcast_temp": "18",
            "displayImage":"md-partly-sunny-sharp",
            "time":"17:00"
        },
        {
            "id":10,
            "forcast_temp": "18",
            "displayImage":"md-partly-sunny-sharp",
            "time":"17:00"
        },
        {
            "id":11,
            "forcast_temp": "18",
            "displayImage":"md-partly-sunny-sharp",
            "time":"17:00"
        },   
        {
            "id":12,
            "forcast_temp": "18",
            "displayImage":"md-partly-sunny-sharp",
            "time":"17:00"
        }
    ]


    const tailwind = useTailwind();
    return (
        <View style={tailwind("border-white border-t border-b p-1 mt-3")}>
        <View style={tailwind("flex-row justify-between p-1 overflow-auto")}>
            <SafeAreaView>
                <FlatList 
                data={hourly}
                horizontal={true}
                
                />
       
            </SafeAreaView>
        </View>
    </View>
    );
}

export default DaysView;



// {hourly.map((hour) => (
//     <View key={hour.id} style={tailwind('flex flex-col')}>
//         <Ionicons name={hour.displayImage}
//             size={30}
//             color="#ffffff"
//             style={tailwind("text-center")}/>
//         <Text style={tailwind("text-center text-white")}>{hour.forcast_temp}c</Text>
//         <Text style={tailwind("text-center text-white")}>{hour.time}</Text>
//     </View>
// ))}