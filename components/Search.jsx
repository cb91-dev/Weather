import React, {useState,useEffect} from 'react';
import { Keyboard,SafeAreaView, TextInput, View} from 'react-native';
import {useTailwind} from 'tailwind-rn';



const Search = (props) => {
	const tailwind = useTailwind();
    const [text, onChangeText] = useState("");



    useEffect(() => {
        const showSubscription = Keyboard.addListener("keyboardDidShow", () => {

        });
        const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {

        });
    
        return () => {
          showSubscription.remove();
          hideSubscription.remove();
        };
      }, []);

	return (
		<SafeAreaView style={tailwind('h-full')}>
			<View style={tailwind('pt-12 items-center')}>
				<View style={tailwind('px-3 py-1 rounded-full')}>
                    <TextInput
                        style={tailwind('underline text-white text-xl')}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Search your city!"
                        placeholderTextColor="#ffffff"
                    />
				</View>
			</View>
		</SafeAreaView>
	);
}


export default Search;