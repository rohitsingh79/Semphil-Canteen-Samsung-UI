import styled from 'styled-components';

export const Wrapper = styled.div`
width:100%;
height:100%;
box-sizing:border-box;
display:flex;
flex-direction:column;
`;

export const FirstBanner = styled.div`
width:100%;
height:${(props)=>props.height}%;
margin-bottom:${props => props.height===100 ? 0 :'24px'}
`;

export const SecondBanner = styled.div`
width:100%;
height:${(props)=>props.remHeight}%;
`;