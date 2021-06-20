import React from 'react';
import { Block, Text } from 'galio-framework';
import logo from '../../assets/images/logo.png';
import { Image } from 'react-native';

const Login = props => (
	<Block flex center>
		<Block center>
			<Image source={logo} resizeMode="contain"/>
		</Block>
	</Block>
);

export default Login;
