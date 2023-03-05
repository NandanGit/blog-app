import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Styles from '../../Styles';
import { BlogContext } from '../context/BlogContext';
import blogActions from '../actions/blogActions';
import { UIContext } from '../context/UIContext';
import uiActions from '../actions/uiActions';
// import useDisableDoubleClick from '../hooks/useDisableDoubleClick';

function BlogPost({ post }) {
	const { dispatch: blogDispatch } = useContext(BlogContext);
	const { dispatch: uiDispatch } = useContext(UIContext);

	const openPostHandler = () => {
		console.log(`Opening the post with title: ${post.title}`);
	};
	const deletePostHandler = () => {
		console.log(`Attempting to delete the post with title: ${post.title}...`);
		uiDispatch(
			uiActions.modal.launch({
				title: 'Confirmation',
				message: `Do you want to delete the post titled ${post.title}`,
				acceptText: 'Delete',
				acceptAction: () => {
					blogDispatch(blogActions.deleteBlog(post.id));
					console.log(`Deleted the post with title: ${post.title}`);
				},
				rejectText: "Don't Delete",
				rejectAction: () => {
					console.log(`Didn't delete the post with title: ${post.title}`);
				},
			})
		);
		// uiDispatch(uiActions.modal.open());
		console.log('Awaiting Conformation...');
	};
	const editPostHandler = () => {
		console.log(`Editing the post with title: ${post.title}`);
	};

	// // useDisableDoubleClick
	// const { isDisabled: isDisabledOpen, delayWrapper: delayWrapperOpen } =
	// 	useDisableDoubleClick();
	// const { isDisabled: isDisabledDelete, delayWrapper: delayWrapperDelete } =
	// 	useDisableDoubleClick();
	// const { isDisabled: isDisabledEdit, delayWrapper: delayWrapperEdit } =
	// 	useDisableDoubleClick();

	return (
		<TouchableOpacity
			// onPress={delayWrapperOpen(openPostHandler)}
			onPress={openPostHandler}
			// disabled={isDisabledOpen}
		>
			<View style={styles.blogPostItem}>
				<Text style={styles.blogPostTitle}>{post.title}</Text>
				<View style={styles.blogPostControlButtons}>
					<TouchableOpacity
						// onPress={delayWrapperEdit(editPostHandler)}
						onPress={editPostHandler}
						// disabled={isDisabledEdit}
					>
						<MaterialIcons
							name='mode-edit'
							style={styles.blogPostControlButton}
							color={Styles.Colors.primary}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						// onPress={delayWrapperDelete(deletePostHandler)}
						onPress={deletePostHandler}
						// disabled={isDisabledDelete}
					>
						<MaterialIcons
							name='delete'
							style={styles.blogPostControlButton}
							color={Styles.Colors.danger}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	blogPostItem: {
		...Styles.Appearance.roundedCorners,
		backgroundColor: Styles.Colors.dark,
		marginBottom: 20,
		...Styles.Appearance.$.padding(20),

		// Alignment
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	blogPostTitle: {
		...Styles.Typography.lighterLight,
		fontSize: 20,
	},
	blogPostControlButtons: {
		display: 'flex',
		flexDirection: 'row',
		// backgroundColor: Styles.Colors.light,
	},
	blogPostControlButton: {
		fontSize: 24,
		marginLeft: 20,
	},
	blogPostDeleteButton: {
		// ...Styles.Typography.danger,
	},
	blogPostEditButton: {
		// ...Styles.Typography.primary,
	},
});

export default BlogPost;
