import React from 'react';
import { Block, Text, Button } from 'galio-framework';
import { ImageBackground, View } from 'react-native';
import styles, { HEIGHT, WIDTH } from './styles';
import bg from '../../assets/images/welcome_back_bg.png';
import WelcomeBg from '../../components/WelcomeBg';
import { COLOURS } from '../../constants/Theme';
import { StatusBar } from 'expo-status-bar';

const originalWidth = 354;
const originalHeight = 620;
const aspectRatio = originalWidth / originalHeight;

const Onboarding = ({ navigation }) => {
	/*<Block style={{width: WIDTH, aspectRatio}}>
		<WelcomeBg originalWidth={originalWidth} originalHeight={originalHeight}/>
	</Block>*/
	return (
		<ImageBackground source={bg} style={{ flex: 1 }}>
			<StatusBar hidden />
			<Block center flex={0.4} style={{ marginTop: 40 }}>
				<Block flex center space={'evenly'}>
					<Text h3 color={COLOURS.WHITE} style={{ fontFamily: 'Raleway-Bold' }}>
						Welcome back
					</Text>
					<Text size={16} muted center color={COLOURS.WHITE} style={styles.subText}>
						{'Please sign in to continue using\n all our app features'}
					</Text>
					<Button color={'transparent'} onPress={() => navigation.navigate('SignIn')}>
						Sign In
					</Button>
				</Block>
			</Block>
		</ImageBackground>
	);
};

export default Onboarding;
