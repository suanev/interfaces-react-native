import React from 'react';
import Slider from '@react-native-community/slider';
import { View } from 'react-native';
import selfish from '../../components/assets/music.jpg';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  CoverContainer,
  Cover,
  ArtistContainer,
  Title,
  Artist,
  PlayerContainer,
  Time,
  MusicControlContainer
} from './styles';

const Music = () => {
  return (
    <Container>
      <CoverContainer>
        <Cover source={selfish} />
      </CoverContainer>
      <ArtistContainer >
        <Icon name="error-outline" color={'#fff'} size={20} style={{ paddingTop: 6, paddingRight: 80 }} />
        <View>
          <Title>Selfish, Pt. 1</Title>
          <Artist>frumhere, simon eng</Artist>
        </View>
        <Icon name="more-vert" color={'#fff'} size={20} style={{ paddingTop: 6, paddingLeft: 80 }} />
      </ArtistContainer>
      <PlayerContainer>
        <Time>0:03</Time>
        <Slider
          style={{ width: 300 }}
          value={0.3}
          minimumValue={0}
          maximumValue={2.3}
          thumbTintColor={'#e91e63'}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#444"
        />
        <Time>2:26</Time>
      </PlayerContainer>
      <MusicControlContainer>
        <Icon name="thumb-down" color={"#fff"} size={24} style={{marginLeft: 80, marginRight: 80}}/>
        <Icon name="skip-previous" color={"#fff"} size={32} />
        <Icon name="pause" color={"#fff"} size={50} style={{marginLeft: 20, marginRight: 20}}/>
        <Icon name="skip-next" color={"#fff"} size={32} />
        <Icon name="thumb-up" color={"#fff"} size={24} style={{marginLeft: 80, marginRight: 80}} />
      </MusicControlContainer>
    </Container>
  );

}

export default Music;
