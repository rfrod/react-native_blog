import React, {useContext, useState} from 'react';
import { StyleSheet } from 'react-native';
import {Context as BlogContext} from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

const EditScreen= ( {navigation}) => {
    const post_id = navigation.getParam('id')
    const {state, editBlogPost} = useContext(BlogContext);

    const blogPost = state.find(
        (blogPost) => blogPost.id === post_id
    );

    return (
        <BlogPostForm
            initialValues={{title:blogPost.title, content:blogPost.content }}
            onSubmit={(title, content) => {
                editBlogPost(post_id, title,content, () => navigation.pop());
            }} 
        />
    );
}

const styles = StyleSheet.create({
});

export default EditScreen;