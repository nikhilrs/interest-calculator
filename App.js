import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import LandingContainer from './containers/LandingContainer';

export default function App() {
	return (
		<View style={styles.container}>
			<LandingContainer />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height
	},
});