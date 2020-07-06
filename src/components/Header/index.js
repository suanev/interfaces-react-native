import React from 'react';
import { Container, Title, Search, SearchSection } from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    return (
        <Container>
            <Title>Foods</Title>
            <SearchSection>
                <Icon name="search" size={20} color="#666" style={{ alignSelf: 'center', paddingRight: 20 }}/>
                <Search
                    placeholderTextColor="#666" placeholder="Search Foods">
                </Search>
            </SearchSection>
        </Container>
    )
}

export default Header;