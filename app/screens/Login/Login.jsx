import React, { useEffect } from 'react';
import { Block, Text, Input, Button } from 'galio-framework';
import logo from '../../assets/images/logo.png';
import { Image, TouchableOpacity } from 'react-native';
import { COLOURS } from '../../constants/Theme';
import FacebookBtn from '../../components/icons/FacebookBtn';
import GoogleBtn from '../../components/icons/GoogleBtn';
import OrBtn from '../../components/icons/OrBtn';
import { WIDTH } from './styles';

const Login = ({ navigation, onAuth}) => {
	useEffect(() => {}, []);

	return (
		<Block flex style={{ backgroundColor: COLOURS.WHITE }}>
			<Block center>
				<Image
					source={logo}
					resizeMode='contain'
					style={{
						width: 150,
						height: 150
					}}
				/>
			</Block>
			<Block flex={0.25} center space={'around'}>
				<Text h3 color={COLOURS.PRIMARY} style={{ fontFamily: 'Raleway-Extra-Bold' }}>
					Welcome back!
				</Text>
				<Block width={WIDTH * 0.75}>
					<Text
						center
						color={COLOURS.SUBTEXT}
						size={16}
						style={{ fontFamily: 'Lato-Regular', lineHeight: 22 }}
					>
						Please Log in to continue using all our app features
					</Text>
				</Block>
			</Block>
			<Block flex={0.15} row space={'evenly'} middle center width={WIDTH / 2}>
				<TouchableOpacity activeOpacity={0.7}>
					<FacebookBtn />
				</TouchableOpacity>
				<TouchableOpacity activeOpacity={0.7}>
					<GoogleBtn />
				</TouchableOpacity>
				<TouchableOpacity>
					<OrBtn />
				</TouchableOpacity>
			</Block>
			<Block flex={0.6} fluid={true} space={'between'} center>
				<Block width={WIDTH * 0.8} style={{ paddingBottom: 10 }}>
					<Text color={COLOURS.PRIMARY} style={{ fontFamily: 'Raleway-Bold' }}>
						E-mail
					</Text>
					<Input
						placeholder={'E-mail'}
						type={'email-address'}
						style={{ borderColor: COLOURS.INPUT }}
						placeholderTextColor={COLOURS.INPUT}
					/>
				</Block>
				<Block width={WIDTH * 0.8} style={{ paddingBottom: 10 }}>
					<Text color={COLOURS.PRIMARY} style={{ fontFamily: 'Raleway-Bold' }}>
						Password
					</Text>
					<Input
						placeholder={'Password'}
						password={true}
						style={{ borderColor: COLOURS.INPUT }}
						placeholderTextColor={COLOURS.INPUT}
					/>
				</Block>
				<Block flex middle width={WIDTH * 0.8}>
					<Button color={COLOURS.PRIMARY} style={{ width: WIDTH * 0.8 }}>
						<Text size={18} color={COLOURS.WHITE} style={{ fontFamily: 'Lato-Bold' }} onPress={() => onAuth()}>
							Log In
						</Text>
					</Button>
				</Block>
				<Block flex middle>
					<Text color={COLOURS.SUBTEXT} style={{ fontFamily: 'Raleway-Regular' }}>
						Not a member yet?{' '}
						<Text
							color={COLOURS.PRIMARY}
							onPress={() => navigation.navigate('SignUp')}
							style={{ textDecorationLine: 'underline', fontFamily: 'Raleway-Bold' }}
						>
							Sign up!
						</Text>
					</Text>
				</Block>
			</Block>
		</Block>
	);
};

export default Login;
