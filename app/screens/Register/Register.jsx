import React from 'react';
import { Block, Text, Input, Button, Checkbox } from 'galio-framework';
import { COLOURS } from '../../constants/Theme';
import { WIDTH } from '../Login/styles';
import { TouchableOpacity } from 'react-native';
import FacebookBtn from '../../components/icons/FacebookBtn';
import GoogleBtn from '../../components/icons/GoogleBtn';
import OrBtn from '../../components/icons/OrBtn';

const Register = ({ navigation, onAuth }) => (
	<Block flex space={"evenly"} style={{ backgroundColor: COLOURS.WHITE, paddingTop: 50 }}>
		<Text h3 center color={COLOURS.PRIMARY} style={{ fontFamily: 'Raleway-Extra-Bold' }}>
			Create an account
		</Text>
		<Block flex={0.7} fluid={true} center>
			{/*<Block flex width={WIDTH * 0.85} row space={'between'} style={{paddingBottom: 5}}>*/}
			{/*<Block width={WIDTH * 0.85}>
				<Text color={COLOURS.PRIMARY} style={{ fontFamily: 'Raleway-Bold' }}>
					First Name
				</Text>
				<Input
					placeholder={'First Name'}
					type={'email-address'}
					style={{ borderColor: COLOURS.INPUT }}
					placeholderTextColor={COLOURS.INPUT}
				/>
			</Block>
			<Block width={WIDTH * 0.85}>
				<Text color={COLOURS.PRIMARY} style={{ fontFamily: 'Raleway-Bold' }}>
					Last Name
				</Text>
				<Input
					placeholder={'Last Name'}
					password={true}
					style={{ borderColor: COLOURS.INPUT }}
					placeholderTextColor={COLOURS.INPUT}
				/>
			</Block>*/}
			{/*</Block>*/}
			<Block flex row space={'evenly'} middle center width={WIDTH / 2}>
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
			<Block flex width={WIDTH * 0.85}>
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
			<Block flex width={WIDTH * 0.85}>
				<Text color={COLOURS.PRIMARY} style={{ fontFamily: 'Raleway-Bold' }}>
					Password
				</Text>
				<Input
					placeholder={'Password'}
					password={true}
					style={{ borderColor: COLOURS.INPUT }}
					placeholderTextColor={COLOURS.INPUT}
					viewPass
				/>
			</Block>
			<Block flex width={WIDTH * 0.85} style={{paddingBottom: 20}}>
				<Text color={COLOURS.PRIMARY} style={{ fontFamily: 'Raleway-Bold' }}>
					Confirm Password
				</Text>
				<Input
					placeholder={'Password'}
					password={true}
					style={{ borderColor: COLOURS.INPUT }}
					placeholderTextColor={COLOURS.INPUT}
					viewPass
				/>
			</Block>
			<Block flex center width={WIDTH * 0.8}>
				<Checkbox
					color={COLOURS.PRIMARY}
					label={
						<Text>
							By selecting agree and continue below, I agree to Ancestree's{' '}
							<Text color={COLOURS.PRIMARY} style={{ textDecorationLine: 'underline' }}>
								Term Of Service
							</Text>{' '}
							and{' '}
							<Text color={COLOURS.PRIMARY} style={{ textDecorationLine: 'underline' }}>
								Privacy Policy.
							</Text>
						</Text>
					}
					labelStyle={{ fontFamily: 'Lato-Regular', color: COLOURS.SUBTEXT }}
				/>
			</Block>
		</Block>
		<Block
			flex={0.2}
			center
			space={"around"}
			middle
			width={WIDTH * 0.85}
		>
			<Button color={COLOURS.PRIMARY} style={{ width: WIDTH * 0.8 }}>
				<Text size={18} color={COLOURS.WHITE} style={{ fontFamily: 'Lato-Bold' }} onPress={() => onAuth()}>
					Continue
				</Text>
			</Button>
			<Text center color={COLOURS.SUBTEXT} style={{ fontFamily: 'Raleway-Regular' }}>
				Already have an account?{' '}
				<Text
					color={COLOURS.PRIMARY}
					onPress={() => navigation.navigate('SignIn')}
					style={{ textDecorationLine: 'underline', fontFamily: 'Raleway-Bold' }}
				>
					Log In.
				</Text>
			</Text>
		</Block>
	</Block>
);

export default Register;
