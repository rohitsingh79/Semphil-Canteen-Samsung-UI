import styled from 'styled-components';

const MainWrapper = styled.div`
display:flex;
width:100%;
height:819px;
justify-content:center;
align-items:center;
background:yellow;
border:1px solid black;
box-sizing:border-box;
`;

const GridWrapper = styled.div`
display:grid;
grid-template-columns:325px 325px 325px 325px;
grid-template-rows:600px;
gap:40px;
`;

export {MainWrapper , GridWrapper};