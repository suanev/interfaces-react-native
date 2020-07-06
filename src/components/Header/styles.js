import styled from 'styled-components/native';

export const Container = styled.View`
    background: #EEE;
    align-items: center;
    justify-content: center;
    border-bottom-width: 1px;
    border-bottom-color: #DDD;
`;

export const Title = styled.Text`
    color: #e91e63;
    text-align: left;
    font-size: 34px;
    font-weight: bold;
    margin: 4px;
`;

export const SearchSection = styled.View`
    height: 50px;
    width: 300px;
    justify-content: center;
    border-radius: 3px;
    padding-left: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
    flex-direction: row;  
    border-radius: 50px;
    background-color: #CCC;
`;

export const Search = styled.TextInput`
    flex: 1;
    border-radius: 50px;
    font-size: 18px;
    color: #666;
    background: #CCC;
`;
