import React, { useContext } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import Styles from '../../../Styles';
import ConformationModal from './ConformationModal';

function ScreenWrapper(props) {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.view}>
				<StatusBar barStyle={'dark-content'} />
				{props.children}
			</View>
			{/* ConformationModal */}
			<ConformationModal />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: Styles.Colors.darkerDark,
		flex: 1,
		display: 'flex',
	},
	view: {
		color: 'white',
		padding: 15,
		paddingTop: 20,
		// marginBottom: 20,
	},
});

export default ScreenWrapper;
