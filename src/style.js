import styled from 'styled-components';
import background from './background.jpg';



export const ContentWrapper = styled.div`
height:89%;
width:100%;
border:2px dashed purple;
box-sizing:border-box;
padding:32px;
`;

export const MainWrapper = styled.div`
height:${props => props.height}%;
width:100%;
height:${props => props.height}px;
box-sizing:border-box;
background-image: url(${background});
background-size: cover;
`;


export const GridWrapper = styled.div`
display:grid;
grid-template-columns:24% 24% 24% 24%;
grid-template-rows:100%;
gap:20px;
border:1px solid brown;
`;

