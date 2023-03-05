import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
	Colors: {
		// Dark Scheme
		dark: '#333',
		lighterDark: '#444',
		darkerDark: '#222',

		// Light Scheme
		light: '#ccc',
		darkerLight: '#bbb',
		lighterLight: '#ddd',

		// Accent
		primary: 'teal',
		secondary: 'green',

		// Others
		danger: 'crimson',
	},

	Appearance: {
		// Functions
		$: {
			padding: (...args) => {
				switch (args.length) {
					case 1:
						return {
							padding: args[0],
						};

					case 2:
						return {
							paddingVertical: args[0],
							paddingHorizontal: args[1],
						};

					case 3:
						return {
							paddingTop: args[0],
							paddingHorizontal: args[1],
							paddingBottom: args[2],
						};

					case 4:
						return {
							paddingTop: args[0],
							paddingRight: args[1],
							paddingBottom: args[2],
							paddingLeft: args[3],
						};

					default:
						return {};
				}
			},
		},

		// Dark Scheme
		dark: { backgroundColor: '#333' },
		lighterDark: { backgroundColor: '#444' },
		darkerDark: { backgroundColor: '#222' },

		// Light Scheme
		light: { backgroundColor: '#ccc' },
		darkerLight: { backgroundColor: '#bbb' },
		lighterLight: { backgroundColor: '#ddd' },

		// Accent
		primary: { backgroundColor: 'teal' },
		secondary: { backgroundColor: 'green' },

		// Others
		danger: {
			backgroundColor: 'crimson',
		},

		// Shape
		roundedCorners: {
			borderRadius: 5,
		},
	},

	Typography: {
		// Dark Scheme
		dark: { color: '#333' },
		lighterDark: { color: '#444' },
		darkerDark: { color: '#222' },

		// Light Scheme
		light: { color: '#ccc' },
		darkerLight: { color: '#bbb' },
		lighterLight: { color: '#ddd' },

		// Accent
		primary: { color: 'teal' },
		secondary: { color: 'green' },

		// Others
		danger: { color: 'crimson' },
	},

	// Padding
});

export default Styles;
