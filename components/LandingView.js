import React, { Component } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text, Dimensions } from 'react-native';

export default class LandingView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    onFailToRecieveAd = (error) => {
        console.log(error);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.kidsAdultsButton} onPress={this._showKidsQuiz}>
                        <Text style={styles.text}>For Kids</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.kidsAdultsButton} onPress={this._showAdultsQuiz}>
                        <Text style={styles.text}>For Adults</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttons: {
        marginTop: 100,
        height: 100,
    },
    kidsAdultsButton: {
        height: 60,
        borderRadius: 5, borderColor: 'white', borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3584d4',
        shadowColor: '#2AC062',
        width: 180,
        marginBottom: 40
    },
    text: {
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FFFFFF'
    }
});