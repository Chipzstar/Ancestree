import React from 'react'
import {StyleSheet, Dimensions} from "react-native";

export const {width: WIDTH} = Dimensions.get("window"); //Max Width of phone screen
export const {height: HEIGHT} = Dimensions.get("window"); //Max Height of phone screen

export default StyleSheet.create({
	container: {
		flex: 1,
		borderColor: 'red',
		borderStyle: 'solid',
		borderWidth: 1,
	},
	subText: {
		fontFamily: "Lato-Regular"
	},
});
