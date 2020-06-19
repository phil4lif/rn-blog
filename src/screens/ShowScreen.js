import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';


const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id')  )
    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ShowScreen;