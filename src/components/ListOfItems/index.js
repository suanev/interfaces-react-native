import React from "react";
import { FlatList } from "react-native";
import { Container, FoodListContainer, Card } from "./styles";


const ListOfItems = ({ foods }) => {
    return (
        <Container>
            <FoodListContainer >
                <FlatList 
                    data={foods}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <Card source={item.image} />
                    )}
                    keyExtractor={item => item.id}
                    numColumns={2}
                />
            </FoodListContainer>
        </Container>
    );
};

export default ListOfItems;