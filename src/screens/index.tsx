import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import usePreload from '../hooks/usePreload';
import RootStack from '../navigation/RootStack';

function Scafold() {
	const { isReady } = usePreload();

	if (!isReady) {
		return <AppLoading />;
	}

	return (
		<SafeAreaProvider>
			<NavigationContainer>
				<RootStack />
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default Scafold;
