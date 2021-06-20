import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Onboarding from './app/screens/Onboarding/Onboarding';

let customFonts = {
	'Lato-Regular': require('./app/assets/fonts/Lato/Lato-Regular.ttf'),
	'Lato-Bold': require('./app/assets/fonts/Lato/Lato-Bold.ttf'),
	'Lato-Italic': require('./app/assets/fonts/Lato/Lato-Italic.ttf'),
	'Lato-Light': require('./app/assets/fonts/Lato/Lato-Light.ttf'),
	'Lato-Black': require('./app/assets/fonts/Lato/Lato-Black.ttf'),
	'Lato-Thin': require('./app/assets/fonts/Lato/Lato-Thin.ttf'),
	'Raleway-Regular': require('./app/assets/fonts/Raleway/static/Raleway-Regular.ttf'),
	'Raleway-Thin': require('./app/assets/fonts/Raleway/static/Raleway-Thin.ttf'),
	'Raleway-Black': require('./app/assets/fonts/Raleway/static/Raleway-Black.ttf'),
	'Raleway-Light': require('./app/assets/fonts/Raleway/static/Raleway-Light.ttf'),
	'Raleway-Italic': require('./app/assets/fonts/Raleway/static/Raleway-Italic.ttf'),
	'Raleway-Bold': require('./app/assets/fonts/Raleway/static/Raleway-Bold.ttf')
};

export default function App() {
	const [loaded, error] = useFonts(customFonts);

	useEffect(() => {

	}, []);

	return !loaded ? null : <Onboarding />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
