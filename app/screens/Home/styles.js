import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { COLOURS } from '../../constants/Theme';

export const { width: WIDTH } = Dimensions.get('window'); //Max Width of phone screen
export const { height: HEIGHT } = Dimensions.get('window'); //Max Height of phone screen

export default (styles = StyleSheet.create({
	icon: {
		position: "absolute",
		left: 10,
		top: 10
	},
	container: {
		flex: 1,
		backgroundColor: COLOURS.WHITE
	},
	raleway: {
		fontFamily: "Raleway-Regular",
	},
	card: {
		width: "80%"
	}
}));
