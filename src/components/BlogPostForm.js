import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View>
            <Text style={styles.label}>Blog Title</Text>
            <TextInput 
            style={styles.input}
            value={title}
            onChangeText={text => setTitle(text)}
            />
            <Text style={styles.label}>Body</Text>
            <TextInput 
            style={styles.input}
            value={content}
            onChangeText={text => setContent(text)}
            />
            <Button 
            onPress={() => onSubmit(title, content)}
            title="Save Blog Post"
            />
        </View>

    )
}
BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}
const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 15,
        margin: 5

    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 15
    }
})

export default BlogPostForm;