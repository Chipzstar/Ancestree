import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Home from '../screens/Home/Home';
import Onboarding from '../screens/Onboarding/Onboarding';

const RootStack = createStackNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();

const RootStackScreen = ({ userToken }) => (
	<RootStack.Navigator headerMode={'none'}>
		{userToken ? (
			<RootStack.Screen name={'App'} component={HomeStackScreen} />
		) : (
			<RootStack.Screen name={'Auth'} component={AuthStackScreen} />
		)}
	</RootStack.Navigator>
);

const AuthStackScreen = () => (
	<AuthStack.Navigator headerMode={'none'} initialRouteName={"Welcome"}>
		<AuthStack.Screen name={"Welcome"} component={Onboarding}/>
		<AuthStack.Screen name={'SignIn'} component={Login} />
		<AuthStack.Screen name={'SignUp'} component={Register} />
	</AuthStack.Navigator>
);

const HomeStackScreen = () => (
	<HomeStack.Navigator headerMode={'none'}>
		<HomeStack.Screen name={'Home'} component={Home} />
	</HomeStack.Navigator>
);

const AppNavigator = props => {
	const [isLoading, setIsLoading] = useState(true);
	const [userToken, setUserToken] = useState(null);
	const [authRoute, setAuthRoute] = useState();

	useEffect(() => {

	}, []);

	return <RootStackScreen userToken={userToken} />;
};

export default AppNavigator;
