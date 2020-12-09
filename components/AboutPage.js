import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

class AboutPage extends Component {

    constructor(props) {
        super(props);
    }

    _closeHelpPage = () => {
        this.props.closePage();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerLabel}>About</Text>
                <Text style={styles.aboutLabel}>
                    This along with several other apps are developed and maintained by a group of enthusiastic developers who want to contribute to the world! More features would be introduced based on the requests and developers availability.
                </Text>
                <Text style={styles.adSupportLabel}>
                    "DO CHECK OUT OUR OTHER APPS. ALSO PLEASE DONT FORGET TO RATE AND COMMENT IN PLAY STORE."
                </Text>
                <Text style={styles.adSupportLabel}>
                    We need your support! Please check the ad links in the app if it interests you, it helps us maintain the application and the development cost. Thanks in advance for your support!
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width - 30
    },
    listItem: {
        marginTop: 3,
    },
    text: {
       color: '#4f603c',
       fontSize: 16,
       color: '#000000',
       fontFamily: "sans-serif-condensed"
    },
    scrollView: {
        height: Dimensions.get('window').height - 160
    },
    headerLabel: {
        width: Dimensions.get('window').width / 2,
        fontFamily: 'sans-serif-condensed',
        fontSize: 22,
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 20
    },
    adSupportLabel: {
        color: 'red',
        fontFamily: "sans-serif-condensed",
        fontSize: 17,
        fontStyle: 'italic',
        marginBottom: 15
    },
    aboutLabel: {
        fontFamily: "sans-serif-condensed",
        fontSize: 17,
        marginBottom: 15
    }
});

export default AboutPage;