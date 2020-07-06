import styled from 'styled-components/native';

export const MenuContainer = styled.ScrollView.attrs({
    horizontal: true,
    contentContainerStyle: { paddingLeft: 10, paddingRight: 20 },
    showsHorizontalScrollIndicator: false
})`
    flex-direction: row;
    margin-top: 8px;
`;