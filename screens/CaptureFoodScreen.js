import React from 'react';
import { StyleSheet,Button,  View,Text } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';

import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';


const CaptureFoodScreen = props => {
    return <View style={styles.screen}>
        <Card style={styles.inputContainer}>

            <Text >Upload Your Food</Text>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Gallery" onPress={this._pickImage} color={Colors.primary} />
                </View>
                <View style={styles.button}>
                    <Button title="Camera" onPress={this._takePhoto} color={Colors.success} />
                </View>
            </View>
        
        </Card>
    </View>
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',

    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        marginTop:20
       
    },
    title: {
        fontSize: 20,
        marginVertical: '10'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    button:{
width:80
    }
});
export default CaptureFoodScreen;