import styled from 'styled-components';
import background from './background.jpg';



export const ContentWrapper = styled.div`
height:89%;
width:100%;
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
@media screen and (min-device-width: 501px) and (max-device-width: 1200px) { 
    grid-template-columns:50% 50%;
    grid-template-rows:50% 50%;
}

  @media screen and (max-width: 500px) {
    grid-template-columns:100%;
    grid-template-rows:35% 35% 35% 35%;
  }

gap:20px;
`;

