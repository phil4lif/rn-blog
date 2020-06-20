import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const EditScreen = ({ navigation }) => {
    return (
        <View>
            <Text>EditScreen - {navigation.getParam('id')}</Text>
        </View>
    )
}
const styles = StyleSheet.create({

})
export default EditScreen;