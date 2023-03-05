import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { BlogProvider } from './src/context/BlogContext';
import { UIProvider } from './src/context/UIContext';
// import { BlogProvider } from './src/context/BlogContext';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'Blog App',
		},
	}
);

// const App = (
// 	<BlogProvider>
// 		<ScreenWrapper>{createAppContainer(navigator)}</ScreenWrapper>
// 	</BlogProvider>
// );
const Navigator = createAppContainer(navigator);

const App = () => {
	return (
		<UIProvider>
			<BlogProvider>
				<Navigator />
			</BlogProvider>
		</UIProvider>
	);
};

export default App;
