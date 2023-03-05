import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styles from '../../../Styles';
import uiActions from '../../actions/uiActions';
import { UIContext } from '../../context/UIContext';

function ConformationModal() {
	const {
		state: { modal: modalState },
		dispatch,
	} = useContext(UIContext);
	// console.log(modalState);
	if (!modalState.isOpen) return;

	const acceptHandler = () => {
		modalState.acceptAction();
		dispatch(uiActions.modal.close());
	};

	const rejectHandler = () => {
		modalState.rejectAction();
		dispatch(uiActions.modal.close());
	};

	return (
		<View style={styles.modal}>
			<View style={styles.modal.backdrop}>
				<View style={styles.modal.area}>
					<View style={styles.modal.area.header}>
						<Text style={styles.modal.area.header.title}>
							{modalState.title}
						</Text>
					</View>
					<View style={styles.modal.area.content}>
						{/* ConformationModal Content Starts Here */}
						<Text style={styles.modal.area.content.message}>
							{modalState.message}
						</Text>
						{/* ConformationModal Content Ends Here */}
					</View>
					<View style={styles.modal.area.footer}>
						<View style={styles.modal.area.footer.controls}>
							<TouchableOpacity
								style={styles.modal.area.footer.controls.cancel}
								onPress={() => {
									dispatch(uiActions.modal.close());
								}}
							>
								<Text style={styles.modal.area.footer.controls.cancel.text}>
									Cancel
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.modal.area.footer.controls.reject}
								onPress={rejectHandler}
							>
								<Text style={styles.modal.area.footer.controls.reject.text}>
									{modalState.rejectText}
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								style={styles.modal.area.footer.controls.accept}
								onPress={acceptHandler}
							>
								<Text style={styles.modal.area.footer.controls.accept.text}>
									{modalState.acceptText}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	// ConformationModal
	modal: {
		position: 'absolute',
		zIndex: 100,
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,

		// Backdrop
		backdrop: {
			backgroundColor: '#1118',
			flex: 1,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},

		// Area
		area: {
			...Styles.Appearance.lighterDark,
			minWidth: '60%',
			maxWidth: '80%',
			minHeight: '15%',
			maxHeight: '25%',
			...Styles.Appearance.roundedCorners,
			// ...Styles.Appearance.$.padding(10, 0),

			// Spacing
			display: 'flex',
			justifyContent: 'space-between',

			// Header
			header: {
				// backgroundColor: 'red',
				borderBottomWidth: 1,
				borderBottomColor: Styles.Colors.dark,
				// borderBottomColor: 'red',
				...Styles.Appearance.$.padding(8, 0),

				// Title
				title: {
					fontSize: 24,
					textAlign: 'center',
					...Styles.Typography.darkerLight,
				},
			},

			// Content
			content: {
				// backgroundColor: 'red',
				flex: 1,
				// marginBottom: -25,
				...Styles.Appearance.$.padding(10, 20),
				borderBottomWidth: 1,
				borderBottomColor: Styles.Colors.dark,

				// Message
				message: {
					textAlign: 'center',
					...Styles.Typography.darkerLight,
				},
			},

			// Footer
			footer: {
				// backgroundColor: 'red',
				...Styles.Appearance.$.padding(10, 20),
				// display: 'flex',
				// flexDirection: 'row',
				// justifyContent: 'center',

				// Controls
				controls: {
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-around',

					// CancelControl
					cancel: {
						...Styles.Appearance.darkerDark,
						...Styles.Appearance.roundedCorners,
						...Styles.Appearance.$.padding(5, 10),

						// Text
						text: {
							...Styles.Typography.darkerLight,
						},
					},

					// Reject Control
					reject: {
						...Styles.Appearance.primary,
						...Styles.Appearance.roundedCorners,
						...Styles.Appearance.$.padding(5, 10),
						// marginRight: 10,

						// Text
						text: {
							...Styles.Typography.lighterLight,
						},
					},

					// Accept Control
					accept: {
						...Styles.Appearance.danger,
						...Styles.Appearance.roundedCorners,
						...Styles.Appearance.$.padding(5, 10),

						// Text
						text: {
							...Styles.Typography.lighterLight,
						},
					},
				},
			},
		},
	},
});

export default ConformationModal;
