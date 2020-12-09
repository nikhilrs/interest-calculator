import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity, ScrollView } from 'react-native';

class HelpPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            helpStatements: [
                {
                    id: 0,
                    statement: '1. In Landing page, you can enter the text you want to convert and hit the GREEN PLAY button to start speaking.'
                },
                {
                    id: 1,
                    statement: '2. At any point, you can hit the RED STOP button to stop speaking',
                },
                {
                    id: 2,
                    statement: '3. CLEAR TEXT button will help clear the text from the text field.',
                },
                {
                    id: 3,
                    statement: '4. SAVE TEXT button will help save the text for you to check at a later time. You can select SAVED from menu to see the saved texts.',
                },
                {
                    id: 4,
                    statement: '5. Select HOME from menu to load landing view at any time',
                },
                {
                    id: 5,
                    statement: '6. There are other features in the works! Expect the releases soon!',
                }
            ]
        };
    }

    _closeHelpPage = () => {
        this.props.closePage();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerLabel}>Help Page</Text>
                <ScrollView style={styles.scrollView} scrollEnabled={true}>
                    {
                        this.state.helpStatements.map((item, index) => (
                            <TouchableOpacity key={item.id} style={styles.listItem} >
                                <Text style={styles.text}>
                                    {item.statement}
                                </Text>
                            </TouchableOpacity>
                        ))
                    }
                    <Text style={styles.adSupportLabel}>
                        We need your support! Please check the ad links in the app if it interests you, it helps us maintain the application and the development cost. Thanks in advance for your support!
                    </Text>
                </ScrollView>
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
        marginTop: 15
    }
});

export default HelpPage;