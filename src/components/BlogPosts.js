import React, { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Styles from '../../Styles';
import { BlogContext } from '../context/BlogContext';
import BlogPost from './BlogPost';

function BlogPosts() {
	const { state: blogPosts } = useContext(BlogContext);

	return (
		<FlatList
			data={blogPosts}
			renderItem={({ item }) => <BlogPost post={item} />}
			keyExtractor={(post) => post.title}
			// contentContainerStyle={styles.blogPostList}
			style={styles.blogPostList}
			showsVerticalScrollIndicator={false}
		/>
	);
}

const styles = StyleSheet.create({
	blogPostList: {
		marginBottom: 10,
	},
});

export default BlogPosts;
