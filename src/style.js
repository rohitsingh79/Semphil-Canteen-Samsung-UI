import styled from 'styled-components';

const MainWrapper = styled.div`
display:flex;
width:100%;
height:100%;
background:cyan;
justify-content:center;
align-items:center;
`;

const Wrapper = styled.div`
display:grid;
grid-template-columns:250px 250px 250px 250px;
grid-template-rows:500px;
gap:40px;
`;

export {MainWrapper , Wrapper};