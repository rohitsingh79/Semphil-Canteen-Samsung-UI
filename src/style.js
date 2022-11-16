import styled from 'styled-components';

export const MainWrapper = styled.div`
height:${props => props.height}%;
width:100%;
height:${props => props.height}px;
padding:10% 3%;
box-sizing:border-box;
`;


export const GridWrapper = styled.div`
display:grid;
grid-template-columns:310px 310px 310px 310px;
@media only screen and (max-width:1000px){
    grid-template-columns:150px 150px 150px 150px;
}
grid-template-rows:600px;
gap:40px;
`;
