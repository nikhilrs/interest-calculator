import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, StatusBar } from 'react-native';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import AboutPage from '../components/AboutPage';
import LandingView from '../components/LandingView';
import SavedTexts from '../components/SavedTexts';
import { AdMobBanner } from 'react-native-admob';

export default class LandingContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLandingView: true,
            showSavedQuotes: false,
            showHelpPage: false,
            showAboutPage: false,
            textToLoad: ''
        }
    }

    _showLandingView = () => { 
        this.setState({ showLandingView: true, showSavedQuotes: false, showHelpPage: false, showAboutPage: false });
    }

    _showSavedQuotes = () => {
        this.setState({ showLandingView: false, showSavedQuotes: true, showHelpPage: false, showAboutPage: false });
    }

    _showHelpPage = () => {
        this.setState({ showLandingView: false, showSavedQuotes: false, showHelpPage: true, showAboutPage: false });
    }

    _showAboutPage = () => {
        this.setState({ showLandingView: false, showSavedQuotes: false, showHelpPage: false, showAboutPage: true });
    }

    _loadSelectedText = (data) => {
        this.setState({
            textToLoad: data.data,
            showLandingView: true, showSavedQuotes: false, showHelpPage: false, showAboutPage: false
        });
        
    }

    _selectedMenu = (menuItem) => {
        switch (menuItem) {
            case 'Home':
                this._showLandingView();
                break;
            case 'Saved':
                this._showSavedQuotes();
                break;
            case 'Help':
                this._showHelpPage();
                break;
            case 'About':
                this._showAboutPage();
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <View>
                <Header _showHelpPage={this._showHelpPage} selectedMenu={this._selectedMenu} />
                <View style={styles.container}>
                    {
                        this.state.showLandingView ? <LandingView text={this.state.textToLoad} /> : null
                    }
                    {
                        this.state.showSavedQuotes ? <SavedTexts loadSelectedText={this._loadSelectedText} /> : null
                    }
                    {
                        this.state.showHelpPage ? <HelpPage /> : null
                    }
                    {
                        this.state.showAboutPage ? <AboutPage /> : null
                    }
                </View>
                <View style={styles.bannerView}>
                    <AdMobBanner
                        adSize="largeBanner"
                        adUnitID="ca-app-pub-8628320246149288/6127254062"
                        testDeviceID="0e71ca58363346548bc3205f4b0dda55"
                        didFailToReceiveAdWithError={this.onFailToRecieveAd} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3584d4',
        height: Dimensions.get('window').height - 55
    },
    bannerView: {
        width: '100%',
        backgroundColor: '#EE5407',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick,
        height: 100
    }
});