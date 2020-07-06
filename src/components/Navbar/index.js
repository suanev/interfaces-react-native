import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import items from '../data';
import ListOfItems from '../ListOfItems';
import { MenuContainer } from './styles';

const Navbar = () => {
    const [foods, setFoods] = useState([]);

    const [buttonState, setButtonState] = useState([
        { type: 'common', toggleClick: false },
        { type: 'recent', toggleClick: false },
        { type: 'plates', toggleClick: false },
    ]);

    const [commonButton, recentButton, platesButton] = buttonState.map(button => button.toggleClick);

    const toggleFilterNavbar = (chosenType) => {
        const filtered = items.filter(item => item.type.includes(chosenType));
        setFoods(filtered);

        const newState = buttonState.map(
            button => button.type === chosenType ? { ...button, toggleClick: true } : { ...button, toggleClick: false }
        );
        setButtonState(newState);
    }

    return (
        <>
            <MenuContainer>
                <TouchableOpacity activeOpacity={0.2} onPress={() => toggleFilterNavbar("common")}>
                    <Text style={commonButton ? styles.normalStyle : styles.normalStyle}>
                        Common
                </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.2} onPress={() => toggleFilterNavbar("recent")}>
                    <Text style={recentButton ? styles.normalStyle : styles.normalStyle}>
                        Recent
                </Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.2} onPress={() => toggleFilterNavbar("plates")}>
                    <Text style={platesButton ? styles.normalStyle : styles.normalStyle}>
                        Plates
                    </Text>
                </TouchableOpacity>
            </MenuContainer>
            <View>
                <ListOfItems foods={foods} />
            </View>
        </>
    )
}

export default Navbar;

const styles = StyleSheet.create({
    normalStyle: {
        color: "#e91e63",
        fontSize: 22,
        textAlign: "center",
        fontWeight: "bold",
        marginLeft: 20,
        marginRight: 20,
        padding: 10
    },

    StyleOnPress: {
        color: "#ffffff",
        backgroundColor: "#e91e63",
        borderRadius: 20,
        fontSize: 22,
        marginLeft: 20,
        marginRight: 20,
        fontWeight: "bold",
        textAlign: "center",
        padding: 10
    }
});