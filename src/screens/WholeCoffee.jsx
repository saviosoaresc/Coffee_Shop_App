import React, { Component } from "react";
import {
    StyleSheet, View, StatusBar,
    FlatList, Image, Text
} from 'react-native'
import api from "../services/Api";
import { LinearGradient } from 'expo-linear-gradient';
import HeaderBar from '../components/HeaderBar'
import styles from "./styles/WholeCoffeeStyle";
import { COLORS } from "../theme/theme";

export default class WholeCoffee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            coffee: [],
        };
    }

    async componentDidMount() {
        const response = await api.get("/coffee");
        this.setState({
            coffee: response.data,
        });
    }

    render() {
        return (
            <View style={styles.ScreenContainer}>
                <StatusBar backgroundColor={COLORS.primaryBlackHex} barStyle="light-content" />
                <View style={styles.content}>
                <HeaderBar title="Modelos"/>
                    <FlatList
                        numColumns={2}
                        data={this.state.coffee}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.list}>
                                <LinearGradient
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    style={styles.CardLinearGradientContainer}
                                    colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}>
                                    <Image
                                        source={{ uri: item.foto }}
                                        style={styles.image}
                                        resizeMode='cover'
                                    />
                                    <View style={styles.title}>
                                        <Text style={styles.texto}>{item.nome}</Text>
                                    </View>
                                </LinearGradient>
                            </View>


                        )}
                    />
                </View>
            </View>
        )
    }
}

