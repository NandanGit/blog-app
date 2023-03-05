import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Styles from '../../Styles';
import BlogPosts from '../components/BlogPosts';
import ScreenWrapper from '../components/UI/ScreenWrapper';

function HomeScreen() {
	return (
		<ScreenWrapper>
			<View style={styles.header}>
				<Text style={styles.title}>Blog Posts</Text>
				<TouchableOpacity style={styles.addPostButton}>
					<Text style={styles.addPostButtonText}>Add Post</Text>
				</TouchableOpacity>
			</View>
			<BlogPosts />
		</ScreenWrapper>
	);
}

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',

		marginBottom: 20,
		// backgroundColor: 'red',
		...Styles.Appearance.$.padding(0, 5),
	},
	title: {
		...Styles.Typography.lighterLight,
		fontSize: 36,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	addPostButton: {
		...Styles.Appearance.primary,
		...Styles.Typography.lighterLight,
		...Styles.Appearance.roundedCorners,
		...Styles.Appearance.$.padding(5, 8),
	},
	addPostButtonText: {
		fontSize: 18,
		...Styles.Typography.lighterLight,
	},
});

export default HomeScreen;
