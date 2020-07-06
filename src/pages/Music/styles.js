import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: #222;
`;

export const CoverContainer = styled.View`
    padding-top: 90px;
    padding-bottom: 30px;
`;

export const Cover = styled.Image`
    width: 250px;
    height: 250px;
    margin-bottom: 50px;
`;
export const ArtistContainer = styled.View`
    flex-direction: row;
    align-content: center;
    justify-content: space-around;
    padding: 20px;
`;

export const Title = styled.Text`
    color: #fff;
    font-size: 24px;
    text-align: center;
`;

export const Artist = styled.Text`
    color: #fff;
    font-size: 14px;
    padding-top: 4px;
    text-align: center;
`;

export const PlayerContainer = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const Time = styled.Text`
    color: #fff;
`;

export const MusicControlContainer = styled.View`
    flex: 1;
    text-align: center;
    align-items: center;
    flex-direction: row;
`;